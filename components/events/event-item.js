import classes from './event-item.module.css'
import Button from '../ui/button';

function EventItem({ item }) {

  const humanReadableDate = new Date(item.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const formattedAddress = item.location.replace(', ', '\n');
  const exploreLink = `/events/${item.id}`

  return (
    <li className={classes.item}>
      <img src={item.image} alt={item.title} />

      <div className={classes.content}>
        <h2>{item.title}</h2>
        <div className={classes.summary}>
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <address>{formattedAddress}</address>
        </div>

        <div className={classes.actions}>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem;