import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const Navigation = () => (
  <nav className={styles.navigation}>
    <NavLink
      exact to="/"
      className={styles.navigationLink}
      activeClassName={styles.navigationLinkActive}>
      Home
    </NavLink>
    &nbsp;&nbsp;
    <NavLink exact to="/contacts"
      className={styles.navigationLink}
      activeClassName={styles.navigationLinkActive}>
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
