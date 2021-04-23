import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import styles from './styles.module.css';

const AppBar = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <header className={styles.appBar}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
