import { Inter } from '@next/font/google'
import { getFeaturedEvents } from "@/dumy-data";
import Link from "next/link";
import EventList from "@/components/events/event-list";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <h1>Featured Events</h1>
      <EventList items={featuredEvents} />
    </>
  )
}

export default HomePage;