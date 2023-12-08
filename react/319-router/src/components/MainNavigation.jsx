import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
