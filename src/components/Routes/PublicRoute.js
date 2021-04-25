import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

/**
 * - Если маршрут ограниченный (если пользователь залогинен, 
 * он по тому маршруту не должен пойти) - Redirect на /contacts (redirectTo)
 * - Иначе рендерим компонент
 */

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAutenticated = useSelector(getIsAuthenticated);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAutenticated && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
