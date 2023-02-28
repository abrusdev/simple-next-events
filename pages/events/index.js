import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dumy-data";

function EventsPage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>All Events</h1>

      <EventList items={featuredEvents} />
    </div>
  );
}

export default EventsPage;
