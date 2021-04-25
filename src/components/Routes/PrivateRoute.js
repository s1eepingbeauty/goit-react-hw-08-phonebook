import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

/**
 * - Если маршрут private и пользователь залогинен - показываем компонент
 * - Иначе Redirect на /login (redirectTo)
 */

const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAutenticated = useSelector(getIsAuthenticated);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAutenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
};

export default PrivateRoute;
