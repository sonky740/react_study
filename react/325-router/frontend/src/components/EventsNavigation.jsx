import { NavLink } from 'react-router-dom';
import styles from './EventsNavigation.module.css';

function EventsNavigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink to="/events">All Events</NavLink>
          </li>
          <li>
            <NavLink to="/events/new">New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
