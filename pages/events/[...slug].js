import { useRouter } from "next/router";
import { getFilteredEvents } from "@/dumy-data";
import EventList from "@/components/events/event-list";

function FilteredEventsPage() {
  const router = useRouter();

  const filter = router.query.slug;

  if (!filter) {
    return <p className='center'>Loading...</p>
  }

  const filteredYear = +filter[0];
  const filteredMonth = +filter[1];

  if (isNaN(filteredYear) || isNaN(filteredMonth)) {
    return (
      <div>
        <h1>Invalid Filter</h1>
      </div>
    )
  }

  const filteredEvents = getFilteredEvents({ year: filteredYear, month: filteredMonth })

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className='center'>No Events Found</p>
  }

  return (
    <div>
      <h1>Filtered Events</h1>
      <EventList items={filteredEvents} />
    </div>
  )
}

export default FilteredEventsPage