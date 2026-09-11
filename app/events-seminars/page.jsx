"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import Image from "next/image";

const EVENTS = [
  {
    id: "delhi-2023",
    title: "Delhi 2023",
    images: [
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c693188991105b7e0c96_5.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c692fcaa1ad1501453e5_6.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c69204d01ab03e72cbaa_9.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c692d82b6d1f0257152a_4-2.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c69289dfae68e3f35003_3-2.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c692c44763e6f626d6cd_7.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c69210b5f56665641cb1_2-2.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c692ceae8eb9177ec462_1-2.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c692140ad6d2283fc4de_8.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c692c38477db807c8873_0.jpg",
    ],
  },
  {
    id: "ahmedabad-2023",
    title: "Ahmedabad 2023",
    images: [
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c69feb7301223003b2cc_7.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c69ff5bb998b9547ea88_8.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c69f41bc291de71c8300_5.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c69f035dcd6be22112c8_2-2.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c69fb048168509878ca7_1-2.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c69f7ab6738da91b313a_0.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c69f81d7337cfc79a8fa_4-2.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c69ff55be224dacac948_6-1.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c69f3ca431128320ba95_9.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c69fc1760b20eef2b2b5_3-2.jpg",
    ],
  },
  {
    id: "ludhiana-2023",
    title: "Ludhiana 2023",
    images: [
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66f51b696d8d681f65f74d32_WhatsApp-Image-2024-09-26-at-1.55.51-PM-2.jpeg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66f51b6999d2f8558f169b2d_WhatsApp-Image-2024-09-26-at-1.55.51-PM.jpeg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c387e7f20fc58fec38b9_4.png",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66f51b6968ba42c087299c4f_WhatsApp-Image-2024-09-26-at-1.55.52-PM.jpeg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66f51b690673fd836965c65b_WhatsApp-Image-2024-09-26-at-1.55.51-PM-1.jpeg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c387b040256010e358f4_6.png",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66f51b6ace701370ef8f01e0_WhatsApp-Image-2024-09-26-at-1.55.56-PM.jpeg",
    ],
  },
  {
    id: "dubai-2023",
    title: "Dubai 2023",
    images: [
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c6866199e186693a3fbc_4.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c6857d7f6a5e7ccaa600_6.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c685eff7606d58f0232d_5.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c6850cea30d72693b90f_7.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c685c1760b20eef2a121_10.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c68589dfae68e3f348b1_9.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c6856ab24b01203d9955_3.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c6854bf50183185bff3b_1.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c68501858d8cc577dc04_2.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6683c6853f7fef5caa7805ab_8.jpg",
    ],
  },
  {
    id: "ahmedabad-2024",
    title: "Ahmedabad 2024",
    images: [
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66d5826c1a370529eb243628_A30I9703.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66d5826c156ebfcfe3502e5e_A30I9710.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66d5826ca6d0abdd10d61551_A30I9667.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66d5826c22823690aeecd883_A30I9885.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66d5826d48c914d8f01ca19b_A30I9926.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66d5826c20ae22014cbe240f_A30I9668.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66d5826dc4a5005dc46aef0d_A30I9896.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66d5826cd871612a8ee1e5a0_A30I9776-rotated.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66d5826d48c914d8f01ca195_A30I9942.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66d5826d94b053040fb49333_A30I9923.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66d5826c7f342ce4457de110_A30I9633.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66d5826dbd6d7a51420d5bb5_A30I9918.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66d5826c89b9897661e895b5_A30I9676.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66d5826df7bd52b11eee1d84_A30I9931.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66d5826c69240ef2b2e0d12a_A30I9736.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66d5826cb9ecb2670bd39948_A30I9891.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/693688d2c296b5e2e8c48f3f_A30I9673-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66d5826cd871612a8ee1e5ce_A30I9879-rotated.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/66d5826c20ae22014cbe23ee_A30I9652.jpg",
    ],
  },
  {
    id: "ahmedabad-2025",
    title: "Ahmedabad 2025",
    images: [
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/69df447c3be7671ebac537a2_3-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/69df447f1d5f37d1d37cbbc6_4-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/69df446ffd8ec96668fc3f88_5-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/69df447b228fddaf26e72ee4_6-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/69df446f5e226280062cdc93_7-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/69df446b52c91fa21a5b9fdf_8-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/69df4467a24436c9ac9bc4cd_9-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/69df44854d841cf66e2f243b_10-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/69df4485ce130f66c8b8c3d7_2-p-2000.jpg",
    ],
  },
  {
    id: "brand-expo-2024",
    title: "Brand Presence in Gujarat",
    images: [
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a06b30805e9a4c6953b1569_6-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a06b512fe7cbe414c9be9e5_2-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a06b308f6c577d673022771_5-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a06b5b8a13f96bd1292a1cf_3-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a06b3058397a0bfe33c0080_7-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a06b5b67f80e84bb42a0ba5_4-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a06b3084ac92dc9570f5804_1-p-2000.jpg",
    ],
  },
  {
    id: "irex-expo-22",
    title: "IREX EXPO 2022",
    images: [
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a201fb2707cb9d4bca08e3b__DSC5371-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a201fad33514a2e01ca797f_DSC_1704-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a201fb252da44f6a55b17e9__DSC4841-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a201fab6e24003527144bf8__DSC5804-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a201faefd5c9cb811d6189e__DSC4304-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a201fab9383b53ec288d5a7_DSC_1569-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a201fb2eee8d2206a72d828__DSC5202-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a201fabb0eb4cdfa0b624bd__DSC5553-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a201faf579d9f8c4b0dddc3_DSC_1613-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a201fabadac21730cbeb727__DSC5635-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a201fad94c1afa6b3888ee4_DSC_1669-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a201fab9383b53ec288d5a7_DSC_1569-p-2000-1.jpg",
    ],
  },
  {
    id: "delhi-pp-2025",
    title: "Delhi POWERPLAY SEMINAR 2025",
    images: [
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a202943b177f8ff77e09ae6_1-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a20294374e1642a6fe90a20_4-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a202944305ffd5a7a90d6a0_3-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a202939a3623ba38f2d94b8_6-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a2029382dbbdb4bf331ecba_5-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a20293895c591c8cba550d7_8-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a2029381ceb3c2db2f5ea01_7-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a20293f1ceb3c2db2f5ec89_10-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a20293e2649f2d790e379fa_9-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a20293fa645a7cc2b4b739e_12-p-2000-scaled.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a202940c1cc31b54b877d9a_11-p-2000.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a20294410bb72be90706b10_2-p-2000.jpg",
    ],
  },
  {
    id: "super-city-2026",
    title: "Super City 2026",
    images: [
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a3bc19956c862c5bba1a757_super-city3.jpeg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a3bc1994574a507c0e1103b_super-city2.jpeg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a3bc1963a9975cbe8f5b971_super-city4.jpeg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a3bc1959f963b1f7da651bd_super-city1.jpeg",
    ],
  },
  {
    id: "kadi-seminar-2026",
    title: "Kadi Seminar 2026",
    images: [
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a66f10ca73946cf86dffe30_IMG_6515-scaled.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a66f10d0ac0d556be2b13f2_IMG_6514-scaled.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a66f10c6dd9550f1f8a9771_IMG_6550-scaled.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a66f10c99fca5d0fa316b5c_IMG_6558-scaled.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a66f10cc8c0b694ee60b272_IMG_6496-scaled.jpg",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a66f10cd6a43b73ad1255c3_IMG_6547-scaled.jpg",
    ],
  },
  {
    id: "gujarat-excellence-award-2026",
    title: "Gujarat Excellence Award 2026",
    images: [
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a69a85f6b1099c252b0fa68_1.png",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a69a85f778f09196d90a596_ChatGPT-Image-Jul-29-2026-11_49_13-AM.png",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a69a85fc048aca1f7e3f9cd_2.png",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a69a85f8561aa2db04445c0_ChatGPT-Image-Jul-29-2026-11_34_15-AM.png",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a69a8783e0590af4ff4218e_magnific_create-a-studioquality-pr_ohoKiNQ829.png",
      "https://cms.phoenixbusinessadvisory.com/wp-content/uploads/2026/09/6a69a85f51b4f8f186b43c0a_ChatGPT-Image-Jul-29-2026-11_46_44-AM.png",
    ],
  },
];

export default function EventsSeminarsPage() {
  const [activeEvent, setActiveEvent] = useState(EVENTS[0].id);

  const tabsRef = useRef(null);

  const scrollTabs = (direction) => {
    if (!tabsRef.current) return;

    tabsRef.current.scrollBy({
      left: direction === "next" ? 300 : -300,
      behavior: "smooth",
    });
  };

  const selectedEvent = EVENTS.find((event) => event.id === activeEvent);

  return (
    <main>
      {/* Hero / Heading */}
      <section className="pt-100-40 pb-60-20">
        <div className="container-main">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[3px] text-gray-500 !mb-3">
              Phoenix Business Advisory
            </p>

            <h1 className="fs-52-32 uppercase">
              Events &{" "}
              <span className="text-[var(--color-red-1)]">Seminars</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Event Tabs + Gallery */}
      <section className="pb-100-40">
        <div className="container-main">
          {/* Tabs */}
          {/* Tabs */}

          <div className="relative mb-60-20">
            {/* Left Button */}

            <button
              type="button"
              onClick={() => scrollTabs("prev")}
              className="
        absolute
        left-0
        top-1/2
        -translate-y-1/2
        z-10
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-white
        border
        border-gray-200
        shadow-md
        hover:border-[var(--color-red-1)]
        transition
        "
            >
              <ChevronLeft size={20} />
            </button>

            {/* Tabs Container */}

            <div
              ref={tabsRef}
              className="
        flex
        gap-3
        overflow-x-auto
        scroll-smooth
        no-scrollbar
        px-14
        "
            >
              {EVENTS.map((event) => {
                const isActive = activeEvent === event.id;

                return (
                  <button
                    key={event.id}
                    type="button"
                    onClick={() => {
                      setActiveEvent(event.id);
                    }}
                    className={`
                    shrink-0
                    px-5
                    py-3
                    border
                    text-xs
                    sm:text-sm
                    uppercase
                    tracking-[1.5px]
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "border-[var(--color-red-1)] bg-[var(--color-red-1)] !text-white"
                        : "border-black/10 bg-white text-gray-500 hover:border-[var(--color-red-1)] hover:text-[var(--color-red-1)]"
                    }
                    `}
                  >
                    {event.title}
                  </button>
                );
              })}
            </div>

            {/* Right Button */}

            <button
              type="button"
              onClick={() => scrollTabs("next")}
              className="
        absolute
        right-0
        top-1/2
        -translate-y-1/2
        z-10
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-white
        border
        border-gray-200
        shadow-md
        hover:border-[var(--color-red-1)]
        transition
        "
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Gallery */}
          <div
            key={selectedEvent.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {selectedEvent.images.map((image, index) => (
              <div
                key={`${selectedEvent.id}-${index}`}
                className="overflow-hidden rounded-2xl bg-gray-100"
              >
                <Image
                  src={image}
                  alt={`${selectedEvent.title} event photo ${index + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
