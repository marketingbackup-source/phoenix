"use client";

import styles from "./MarqueeSlider.module.css";

export default function MarqueeSlider({
  items,
  renderItem,
  speed = "40s",
  direction = "left",
  pauseOnHover = true,
  gap = "gap-8",
  className = "",
}) {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>

      <div
        className={`${styles.track} flex w-max ${gap}`}
        style={{
          "--speed": speed,
          "--direction": direction === "right" ? "reverse" : "normal",
        }}
      >

        {duplicatedItems.map((item, index) => (

          <div
            key={index}
            className={pauseOnHover ? styles.item : ""}
          >
            {renderItem(item, index)}
          </div>

        ))}

      </div>

    </div>
  );
}