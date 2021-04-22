import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { getIsAuthenticated } from '../redux/auth/auth-selectors';

const AppBar = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <header>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
