import EventsClient from "@/components/Events/EventsClient";
import { getEvents } from "@/services/cms/events/get-events";

export const metadata = {
  title: "Events & Seminars | Phoenix Business Advisory",
  description:
    "Explore Phoenix Business Advisory events, seminars and business networking sessions.",
};

export default async function EventsSeminarsPage() {
  const events = await getEvents();

  return (
    <main>
      {/* Hero / Heading */}

      <section className="pt-100-40 pb-60-20 min-h-[30vh] lg:min-h-[30vh] flex flex-col justify-end items-end">
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

      <EventsClient events={events} />
    </main>
  );
}
