import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import styles from './styles.module.css';

const Navigation = () => {
  const isAutenticated = useSelector(getIsAuthenticated);

  return (
    <nav className={styles.navigation}>
      <NavLink
        exact
        to="/"
        className={styles.navigationLink}
        activeClassName={styles.navigationLinkActive}
      >
        Home
      </NavLink>
      {isAutenticated && (
        <NavLink
          exact
          to="/contacts"
          className={styles.navigationLink}
          activeClassName={styles.navigationLinkActive}
        >
          &nbsp;&nbsp; Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
