"use client";

import { useEffect, useRef } from "react";

// ---------------------------------------------------------------------------
// Real coastline data, baked in as a compact land/ocean bitmask.
// SPHERE_N points are laid out on the sphere with a Fibonacci distribution;
// LAND_MASK_B64 flags which of those points fall on land (derived offline
// from Natural Earth 110m coastlines), so the dot pattern traces actual
// continents instead of covering the sphere uniformly.
// ---------------------------------------------------------------------------
const SPHERE_N = 2600;
const LAND_MASK_B64 =
  "wP99Pz8/paW3pISUiAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAACAAAAQAAAAQCAAAAAAACAQAAAAAAAQCAECQAAACIAAACAAAgVAiAgUAYEiYEQEioBQESgCAkVAqAgUAYEiUEQEiopQESgiAkUhoAgUEaD/UVAEikhBASgoAEWgoAAUEIICUFAACkhBESggBgWkoBgUkIIiVFCIikBRASgIRQWoIAAVhIICUBAIClBBACgJBSGgIASEpIJQUBICQkJYCEgBAaEoJASEpqAQlJoCQlJoCEhJhSEpJRWkpNDUlJKCU1JqKkpJySgpJSWnoMSUnJqSU1NiSkZPiKkZMSEjZ8TEjJoQE3Nyak7FyIg5PTWj5uTUnJybU3Nyak7OzWm5PTcn5ufcnZ67M/JS/t7K2l95u9LWWt5qn8wRGTogISEkAA==";

const MARKERS = [
  { name: "India", icon: "taj", lat: 22, lon: 78 },
  { name: "Australia", icon: "opera", lat: -25, lon: 134 },
  { name: "New Zealand", icon: "fern", lat: -41, lon: 174 },
  { name: "USA", icon: "liberty", lat: 39, lon: -98 },
  { name: "Dubai", icon: "burj", lat: 25.2, lon: 55.3 },
].map((marker) => ({
  ...marker,
  ...latLonToXYZ(marker.lat, marker.lon),
}));

const COLOR_DOT = "#E60000";
const COLOR_DOT_DIM = "#B80000";
const COLOR_RED = "#8A0000";
const COLOR_BADGE_BG = "#666666";
const COLOR_BADGE_STROKE = "rgba(74, 110, 140, 0.35)";

const TILT = -0.34;
const COS_TILT = Math.cos(TILT);
const SIN_TILT = Math.sin(TILT);
const SPIN_SPEED = 0.0022;

function decodeMask(base64, count) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  const bits = new Uint8Array(count);

  for (let i = 0; i < count; i++) {
    bits[i] = (bytes[i >> 3] >> i % 8) & 1;
  }

  return bits;
}

function buildSphere(samples) {
  const points = [];
  const offset = 2 / samples;
  const increment = Math.PI * (3 - Math.sqrt(5));

  for (let index = 0; index < samples; index++) {
    const y = index * offset - 1 + offset / 2;
    const radius = Math.sqrt(Math.max(0, 1 - y * y));
    const phi = index * increment;

    points.push({
      x: Math.cos(phi) * radius,
      y,
      z: Math.sin(phi) * radius,
    });
  }

  return points;
}

function latLonToXYZ(lat, lon) {
  const phi = (lat * Math.PI) / 180;
  const theta = (lon * Math.PI) / 180;

  return {
    x: Math.cos(phi) * Math.cos(theta),
    y: Math.sin(phi),
    z: Math.cos(phi) * Math.sin(theta),
  };
}

const LAND_BITS = decodeMask(LAND_MASK_B64, SPHERE_N);
const SPHERE_POINTS = buildSphere(SPHERE_N)
  .map((point, index) => ({ ...point, land: LAND_BITS[index] === 1 }))
  .filter((point) => point.land);

function rotateProject(point, spin, centerX, centerY, radius) {
  const cosSpin = Math.cos(spin);
  const sinSpin = Math.sin(spin);

  const rotatedX = point.x * cosSpin + point.z * sinSpin;
  const rotatedZ = -point.x * sinSpin + point.z * cosSpin;
  const rotatedY = point.y;

  const tiltedY = rotatedY * COS_TILT - rotatedZ * SIN_TILT;
  const tiltedZ = rotatedY * SIN_TILT + rotatedZ * COS_TILT;

  return {
    x: centerX + rotatedX * radius,
    y: centerY - tiltedY * radius,
    z: tiltedZ,
  };
}

// ---------------------------------------------------------------------------
// Graticule (latitude / longitude wireframe) — subtle, front-hemisphere only
// ---------------------------------------------------------------------------

function latitudeRing(y, segments = 90) {
  const r = Math.sqrt(Math.max(0, 1 - y * y));
  const points = [];

  for (let i = 0; i <= segments; i++) {
    const t = (i / segments) * Math.PI * 2;
    points.push({ x: Math.cos(t) * r, y, z: Math.sin(t) * r });
  }

  return points;
}

function meridianRing(lonRad, segments = 90) {
  const points = [];

  for (let i = 0; i <= segments; i++) {
    const t = (i / segments) * Math.PI * 2;
    points.push({
      x: Math.sin(t) * Math.cos(lonRad),
      y: Math.cos(t),
      z: Math.sin(t) * Math.sin(lonRad),
    });
  }

  return points;
}

const LATITUDE_RINGS = [-0.5, 0, 0.5].map((y) => latitudeRing(y));
const MERIDIAN_RINGS = [0, 45, 90, 135].map((deg) =>
  meridianRing((deg * Math.PI) / 180)
);

function strokeVisibleRing(ctx, ring3D, spin, centerX, centerY, radius) {
  ctx.beginPath();

  let started = false;

  ring3D.forEach((point) => {
    const projected = rotateProject(point, spin, centerX, centerY, radius);
    const visible = projected.z > -0.03;

    if (visible) {
      if (!started) {
        ctx.moveTo(projected.x, projected.y);
        started = true;
      } else {
        ctx.lineTo(projected.x, projected.y);
      }
    } else {
      started = false;
    }
  });

  ctx.stroke();
}

function findNearestMarker(markers, pointer) {
  if (!pointer) return null;

  let nearestMarker = null;
  let nearestDistance = Infinity;

  markers.forEach((marker) => {
    if (marker.z < -0.15) return;

    const distanceX = marker.x - pointer.x;
    const distanceY = marker.y - pointer.y;
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestMarker = marker;
    }
  });

  return nearestDistance <= 70 ? nearestMarker : null;
}

// ---------------------------------------------------------------------------
// Landmark icons — filled, badge-mounted. Each draws centered roughly on
// (cx, cy) within a box about `s` wide/tall.
// ---------------------------------------------------------------------------

function drawBadge(ctx, cx, cy, r, isActive) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.shadowColor = "rgba(20, 34, 48, 0.35)";
  ctx.shadowBlur = isActive ? 12 : 7;
  ctx.shadowOffsetY = 2;
  ctx.fillStyle = isActive ? "#FFF5F4" : COLOR_BADGE_BG;
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.strokeStyle = isActive ? COLOR_RED : COLOR_BADGE_STROKE;
  ctx.lineWidth = isActive ? 1.4 : 1;
  ctx.stroke();
}

const IMAGE_CACHE = new Map();
const IMAGE_PLACEHOLDERS = {
  taj: "/images/home/flag.png",
  liberty: "/images/home/national.png",
  opera: "/images/home/australia.png",
  fern: "/images/home/european.png",
  burj: "/images/home/united-arab-emirates.png",
};

function getImage(imageUrl) {
  if (IMAGE_CACHE.has(imageUrl)) return IMAGE_CACHE.get(imageUrl);

  const img = new Image();
  img.src = imageUrl;
  IMAGE_CACHE.set(imageUrl, img);

  return img;
}

function drawImageMarker(ctx, cx, cy, s, imageUrl) {
  const img = getImage(imageUrl);

  const draw = () => {
    if (!img.complete || img.naturalWidth === 0) return;

    const size = Math.max(22, s * 1.3);
    const x = cx - size / 2;
    const y = cy - size / 2;

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, size / 2, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(img, x, y, size, size);
    ctx.restore();
  };

  if (img.complete && img.naturalWidth) {
    draw();
  } else {
    img.addEventListener("load", draw, { once: true });
  }
}

function drawLandmarkIcon(ctx, iconKey, cx, cy, size, color) {
  const imageUrl = IMAGE_PLACEHOLDERS[iconKey];
  if (!imageUrl) return;

  drawImageMarker(ctx, cx, cy, size, imageUrl);
}

export default function Globe() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const state = {
      width: 0,
      height: 0,
      spin: 0.35,
      paused: false,
      pointer: null,
    };

    function resizeCanvas() {
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      const rectangle = canvas.getBoundingClientRect();

      state.width = rectangle.width;
      state.height = rectangle.height;

      canvas.width = Math.round(rectangle.width * devicePixelRatio);
      canvas.height = Math.round(rectangle.height * devicePixelRatio);

      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    }

    function handlePointerEnter() {
      state.paused = true;
    }

    function handlePointerMove(event) {
      const rectangle = canvas.getBoundingClientRect();

      state.pointer = {
        x: event.clientX - rectangle.left,
        y: event.clientY - rectangle.top,
      };
    }

    function handlePointerLeave() {
      state.paused = false;
      state.pointer = null;
    }

    function handleTouchStart(event) {
      const touch = event.touches[0];

      if (!touch) return;

      const rectangle = canvas.getBoundingClientRect();

      state.pointer = {
        x: touch.clientX - rectangle.left,
        y: touch.clientY - rectangle.top,
      };

      state.paused = true;
    }

    function handleTouchEnd() {
      state.pointer = null;
      state.paused = false;
    }

    function drawGlobe() {
      const width = state.width;
      const height = state.height;

      if (!width || !height) {
        animationRef.current = requestAnimationFrame(drawGlobe);

        return;
      }

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.45;

      context.clearRect(0, 0, width, height);

      // grounding shadow beneath the sphere
      const shadowGradient = context.createRadialGradient(
        centerX,
        centerY + radius * 0.94,
        radius * 0.1,
        centerX,
        centerY + radius * 0.94,
        radius * 0.85
      );
      shadowGradient.addColorStop(0, "rgba(20, 34, 48, 0.22)");
      shadowGradient.addColorStop(1, "rgba(20, 34, 48, 0)");
      context.fillStyle = shadowGradient;
      context.beginPath();
      context.ellipse(
        centerX,
        centerY + radius * 0.94,
        radius * 0.85,
        radius * 0.18,
        0,
        0,
        Math.PI * 2
      );
      context.fill();

      // atmosphere glow
      const glowGradient = context.createRadialGradient(
        centerX,
        centerY,
        radius * 0.96,
        centerX,
        centerY,
        radius * 1.16
      );
      glowGradient.addColorStop(0, "rgba(120, 165, 200, 0.35)");
      glowGradient.addColorStop(1, "rgba(120, 165, 200, 0)");
      context.fillStyle = glowGradient;
      context.beginPath();
      context.arc(centerX, centerY, radius * 1.16, 0, Math.PI * 2);
      context.fill();

      // lit sphere (ocean) backdrop
      const sphereGradient = context.createRadialGradient(
        centerX - radius * 0.35,
        centerY - radius * 0.38,
        radius * 0.05,
        centerX - radius * 0.1,
        centerY - radius * 0.05,
        radius * 1.15
      );
      sphereGradient.addColorStop(0, "#F3F8FB");
      sphereGradient.addColorStop(0.45, "#D3E1EA");
      sphereGradient.addColorStop(0.8, "#A9C0D1");
      sphereGradient.addColorStop(1, "#7C97AC");

      context.save();
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2);
      context.clip();
      context.fillStyle = sphereGradient;
      context.fillRect(centerX - radius, centerY - radius, radius * 2, radius * 2);

      context.lineWidth = 0.6;
      context.strokeStyle = "rgba(74, 110, 140, 0.12)";
      LATITUDE_RINGS.forEach((ring) =>
        strokeVisibleRing(context, ring, state.spin, centerX, centerY, radius)
      );
      MERIDIAN_RINGS.forEach((ring) =>
        strokeVisibleRing(context, ring, state.spin, centerX, centerY, radius)
      );

      SPHERE_POINTS.forEach((point) => {
        const projectedPoint = rotateProject(
          point,
          state.spin,
          centerX,
          centerY,
          radius
        );

        const depth = (projectedPoint.z + 1) / 2;

        if (depth < 0.16) return;

        const dotSize = radius * (0.0038 + depth * 0.0085);

        context.beginPath();
        context.arc(projectedPoint.x, projectedPoint.y, dotSize, 0, Math.PI * 2);

        context.fillStyle = depth > 0.55 ? COLOR_DOT : COLOR_DOT_DIM;
        context.globalAlpha = 0.35 + depth * 0.65;
        context.fill();
      });

      context.globalAlpha = 1;
      context.restore();

      // rim shading (limb darkening) for volume
      const rimGradient = context.createRadialGradient(
        centerX,
        centerY,
        radius * 0.75,
        centerX,
        centerY,
        radius
      );
      rimGradient.addColorStop(0, "rgba(30, 48, 66, 0)");
      rimGradient.addColorStop(1, "rgba(30, 48, 66, 0.22)");
      context.save();
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2);
      context.clip();
      context.fillStyle = rimGradient;
      context.fillRect(centerX - radius, centerY - radius, radius * 2, radius * 2);
      context.restore();

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2);
      context.strokeStyle = "rgba(74, 110, 140, 0.25)";
      context.lineWidth = 1;
      context.stroke();

      const projectedMarkers = MARKERS.map((marker) => ({
        ...marker,
        ...rotateProject(marker, state.spin, centerX, centerY, radius),
      }));

      const activeMarker = state.paused
        ? findNearestMarker(projectedMarkers, state.pointer)
        : null;

      projectedMarkers.forEach((marker) => {
        if (marker.z < -0.15) return;

        const isActive = activeMarker?.name === marker.name;
        const depth = Math.max(0, Math.min(1, (marker.z + 1) / 2));
        const frontOpacity = Math.max(0.4, depth);

        const badgeRadius = isActive ? radius * 0.135 : radius * 0.095;
        const badgeY = marker.y - badgeRadius * 0.85;

        context.globalAlpha = frontOpacity;

        drawBadge(context, marker.x, badgeY, badgeRadius, isActive);

        drawLandmarkIcon(
          context,
          marker.icon,
          marker.x,
          badgeY,
          badgeRadius * 1.35,
          isActive ? COLOR_RED : COLOR_DOT
        );

        context.beginPath();
        context.moveTo(marker.x, badgeY + badgeRadius * 0.92);
        context.lineTo(marker.x, marker.y);
        context.strokeStyle = isActive ? COLOR_RED : COLOR_BADGE_STROKE;
        context.lineWidth = 1.2;
        context.stroke();

        context.beginPath();
        context.arc(marker.x, marker.y, isActive ? 3.5 : 2.6, 0, Math.PI * 2);
        context.fillStyle = isActive ? COLOR_RED : COLOR_DOT;
        context.fill();

        context.globalAlpha = 1;

        if (isActive) {
          context.font =
            '600 13px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
          context.fillStyle = COLOR_RED;
          context.textAlign = "center";
          context.textBaseline = "alphabetic";
          context.fillText(marker.name, marker.x, badgeY - badgeRadius - 10);
        }
      });

      if (!reducedMotion && !state.paused) {
        state.spin += SPIN_SPEED;
      }

      animationRef.current = requestAnimationFrame(drawGlobe);
    }

    const resizeObserver = new ResizeObserver(resizeCanvas);

    resizeObserver.observe(canvas);

    canvas.addEventListener("pointerenter", handlePointerEnter);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);
    canvas.addEventListener("touchstart", handleTouchStart, { passive: true });
    canvas.addEventListener("touchend", handleTouchEnd);

    resizeCanvas();

    animationRef.current = requestAnimationFrame(drawGlobe);

    return () => {
      resizeObserver.disconnect();

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      canvas.removeEventListener("pointerenter", handlePointerEnter);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="mx-auto aspect-square w-full max-w-[400px]">
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Interactive globe highlighting India, Australia, New Zealand, USA and Dubai"
        className="block h-full w-full cursor-pointer"
      />
    </div>
  );
}