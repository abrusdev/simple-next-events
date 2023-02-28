import EventItem from "@/components/events/event-item";
import classes from './event-list.module.css'

function EventList({ items }) {

  const renderedItems = items.map((item) => {
    return <EventItem key={item.id} item={item} />
  })

  return <ul className={classes.list}>
    {renderedItems}
  </ul>
}

export default EventList;