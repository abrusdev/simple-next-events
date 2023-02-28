import EventList from "@/components/events/event-list";
import { getAllEvents, getFeaturedEvents } from "@/dumy-data";
import EventSearch from "@/components/events/event-search";
import { useRouter } from "next/router";

function EventsPage() {
  const router = useRouter();

  const allEvents = getAllEvents();

  const handleSearch = (year, month) => {
    const fullPath = `/events/${year}/${month}`

    router.push(fullPath).then();
  }

  return (
    <div>
      <h1>All Events</h1>
      <EventSearch onSearch={handleSearch}/>
      <EventList items={allEvents} />
    </div>
  );
}

export default EventsPage;
