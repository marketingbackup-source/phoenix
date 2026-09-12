"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import BaseButton from "@/components/UI/BaseButton";
import { Headset } from "lucide-react";

const countries = [
    { flag: "🇺🇸", label: "United States" },
    { flag: "🇦🇺", label: "Australia" },
    { flag: "🇦🇪", label: "UAE" },
    { flag: "🇪🇺", label: "Europe" },
    { flag: "🇳🇿", label: "New Zealand" },
    { flag: "🇨🇦", label: "Canada" },
];
const marqueeItems = [...countries, ...countries];

function LibertyModel(props) {
    const group = useRef();
    const inner = useRef();
    const { scene } = useGLTF("/models/liberty.glb");

    // auto-center + auto-scale to a fixed on-screen height, regardless of
    // whatever units/scale the model was exported at — this is what was
    // missing before, and why the model wasn't visible
    useEffect(() => {
    if (!inner.current) return;

    const box = new THREE.Box3().setFromObject(inner.current);

    const size = new THREE.Vector3();
    box.getSize(size);

    const targetHeight = 4.2;

    const scale = targetHeight / size.y;

    inner.current.scale.setScalar(scale);


    // Recalculate after scaling
    const scaledBox = new THREE.Box3().setFromObject(inner.current);

    const center = new THREE.Vector3();
    scaledBox.getCenter(center);


    // Keep base fixed at rotation point
    inner.current.position.x -= center.x;
    inner.current.position.z -= center.z;

    // Put bottom exactly at y = 0
    inner.current.position.y -= scaledBox.min.y;


}, [scene]);

    useFrame((_, delta) => {
        if (group.current) group.current.rotation.y += delta * 0.12;
    });

    return (
        <group ref={group} {...props}>
            <primitive ref={inner} object={scene} />
        </group>
    );
}

useGLTF.preload("/models/liberty.glb");

export default function Banner() {
    return (
        <section className="bg-[#f2f2f278]">
            <div className="container-main rounded-4xl pt-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-7/12">
                        <h1 className="fs-52-32 leading-[0.95] uppercase !mb-8">
                            Acquire Business in USA Get{" "}
                            <span className="text-green-700">Green Card</span> in 2 Years*
                        </h1>
                        <p className="text-gray-500 !mb-8 lg:!mb-10">
                            Phoenix Business Advisory has helped entrepreneurs, investors,
                            founders, and business owners confidently establish and expand
                            their businesses in the USA, Australia, and other global
                            markets. From business setup to immigration strategy, our
                            experts guide you through every step.
                        </p>
                        <BaseButton title="Contact Us" link toLink="/contact" style="secondary">
                            <Headset
                                className="ml-2 transition-colors duration-300 group-hover:text-[var(--color-red-1)]"
                                size={20}
                            />
                        </BaseButton>

                        <div className="phx-marquee-mask relative mt-10 max-w-full overflow-hidden lg:mt-14">
                            <div className="phx-marquee flex w-max items-center gap-8">
                                {marqueeItems.map((c, i) => (
                                    <div key={i} className="flex items-center gap-2 whitespace-nowrap">
                                        <span className="text-xl">{c.flag}</span>
                                        <span className="text-sm text-gray-500">{c.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-5/12">
                        <div className="relative mx-auto h-[640px] w-full max-w-[460px] overflow-hidden ">
                            <Canvas
                                camera={{
                                    position: [46, 6, 35],
                                    fov: 55,
                                }}
                                shadows
                            >
                                <ambientLight intensity={0.6} />

                                <directionalLight
                                    position={[4, 6, 4]}
                                    intensity={1.1}
                                    castShadow
                                />

                                <Suspense fallback={null}>
                                    <LibertyModel
                                        position={[4, -25, 4]}
                                    />

                                    <Environment preset="city" />
                                </Suspense>

                                <ContactShadows
                                    position={[0, -12, 0]}
                                    opacity={0.35}
                                    scale={12}
                                    blur={2.4}
                                />

                                <OrbitControls
    enablePan={false}
    enableZoom={false}

    // Allow only horizontal rotation
    minPolarAngle={Math.PI / 2}
    maxPolarAngle={Math.PI / 2}

    target={[0, -3, 0]}
 />
                            </Canvas>
                            <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-400">
                                Drag to rotate
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .phx-marquee { animation: phx-marquee-scroll 22s linear infinite; }
        .phx-marquee-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
        @keyframes phx-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .phx-marquee { animation: none; }
        }
      `}</style>
        </section>
    );
}