import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <div>
    <NavLink exact to="/register">
      Registration
    </NavLink>
    <NavLink exact to="/login">
      LogIn
    </NavLink>
  </div>
);

export default AuthNav;
