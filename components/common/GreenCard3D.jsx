"use client";

import React, { useEffect, useRef, useState } from "react";
import { User, Fingerprint, Wifi, Star } from "lucide-react";
import styles from "./GreenCardFooterBadge.module.css";

export default function GreenCardFooterBadge() {
  const sceneRef = useRef(null);
  const cardRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const t = useRef(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf;

    const tick = () => {
      t.current += 1;

      current.current.x +=
        (target.current.x - current.current.x) * 0.08;

      current.current.y +=
        (target.current.y - current.current.y) * 0.08;

      const floatY = reduced ? 0 : Math.sin(t.current / 55) * 7;
      const floatR = reduced ? 0 : Math.sin(t.current / 90) * 1.4;

      if (cardRef.current) {
        cardRef.current.style.transform = `rotateX(${current.current.x}deg) rotateY(${current.current.y}deg) translateY(${floatY}px) rotateZ(${floatR}deg)`;
      }

      if (sceneRef.current) {
        sceneRef.current.style.setProperty(
          "--shadow-scale",
          `${1 - Math.abs(floatY) / 60}`
        );
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  const handleMove = (e) => {
    const rect = sceneRef.current.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    target.current = {
      x: (0.5 - py) * 16,
      y: (px - 0.5) * 22,
    };

    if (cardRef.current) {
      cardRef.current.style.setProperty("--mx", `${px * 100}%`);
      cardRef.current.style.setProperty("--my", `${py * 100}%`);
    }
  };

  const handleLeave = () => {
    target.current = { x: 0, y: 0 };
    setHovered(false);
  };

  return (
    <div className={styles["gcfb-wrap"]}>
      <div
        className={styles["gcfb-scene"]}
        ref={sceneRef}
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
      >
        <div className={styles["gcfb-ground"]} />

        <div
          className={`${styles["gcfb-card"]} ${
            hovered ? styles["gcfb-hover"] : ""
          }`}
          ref={cardRef}
        >
          <div className={styles["gcfb-face"]}>
            <div className={styles["gcfb-topbar"]} />

            <div className={styles["gcfb-body"]}>
              <div className={styles["gcfb-header"]}>
                <div>
                  <div className={styles["gcfb-country"]}>
                    UNITED STATES OF AMERICA
                  </div>

                  <div className={styles["gcfb-title"]}>
                    USA Green Card
                  </div>

                  <div className={styles["gcfb-stars"]}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={7}
                        fill="#808080"
                        color="#808080"
                      />
                    ))}
                  </div>
                </div>

                <Wifi
                  size={16}
                  className={styles["gcfb-rfid"]}
                />
              </div>

              <div className={styles["gcfb-main"]}>
                <div className={styles["gcfb-photo"]}>
                  <User
                    size={26}
                    color="#666666"
                  />
                </div>

                <div className={styles["gcfb-fields"]}>
                  <div className={styles["gcfb-field"]}>
                    <span className={styles["bar"]} />

                    <div>
                      <div className={styles["gcfb-label"]}>
                        Category
                      </div>

                      <div className={styles["gcfb-value"]}>
                        EB-1A
                      </div>
                    </div>
                  </div>

                  <div className={styles["gcfb-field"]}>
                    <span className={styles["bar"]} />

                    <div>
                      <div className={styles["gcfb-label"]}>
                        Resident Since
                      </div>

                      <div className={styles["gcfb-value"]}>
                        2025
                      </div>
                    </div>
                  </div>

                  <div className={styles["gcfb-field"]}>
                    <span className={styles["bar"]} />

                    <div>
                      <div className={styles["gcfb-label"]}>
                        Card Expires
                      </div>

                      <div className={styles["gcfb-value"]}>
                        2035
                      </div>
                    </div>
                  </div>
                </div>

                <Fingerprint
                  size={70}
                  className={styles["gcfb-emblem"]}
                />
              </div>

              <div className={styles["gcfb-footer"]}>
                <span className={styles["gcfb-cardnum"]}>
                  USA • 0000 0000 0000
                </span>

                <Fingerprint
                  size={14}
                  className={styles["gcfb-fingerprint"]}
                />
              </div>
            </div>

            <div className={styles["gcfb-hologram"]} />
          </div>

          <div className={styles["gcfb-sweep"]} />
          <div className={styles["gcfb-shine"]} />
        </div>
      </div>
    </div>
  );
}