import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink exact to="/">
      Home
    </NavLink>
    <NavLink exact to="/contacts">
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
