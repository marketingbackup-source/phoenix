"use client";

import Script from "next/script";

export default function ZohoWidget({
  url,
  height = "600px",
}) {
  function initializeWidget() {
    const container = document.querySelector("#zoho-booking-widget");

    if (!container || !window.Bookings) {
      return;
    }

    container.innerHTML = "";

    window.Bookings.inlineEmbed({
      url,
      parent: "#zoho-booking-widget",
      height,
    });
  }

  return (
    <>
      <Script
        src="https://bookings.nimbuspop.com/assets/embed.js"
        strategy="afterInteractive"
        onLoad={initializeWidget}
      />

      <div
        id="zoho-booking-widget"
        className="w-full"
        style={{ minHeight: height }}
      />
    </>
  );
}