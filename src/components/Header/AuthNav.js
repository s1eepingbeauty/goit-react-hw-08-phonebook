import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const AuthNav = () => (
  <div className={styles.authNav}>
    <NavLink
      exact to="/login"
      className={styles.authNavLink}
    >
      Login
    </NavLink>
    &nbsp;&nbsp;
    <NavLink
      exact to="/register"
      className={styles.authNavLink}
    >
      Registration
    </NavLink>
  </div>
);

export default AuthNav;
