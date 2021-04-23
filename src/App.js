import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect} from 'react';
import AppBar from './components/Header/AppBar';
import HomeView from './views/HomeView';
import RegistrationView from './views/RegistrationView';
import LogInView from './views/LogInView';
import ContactsView from './views/ContactsView';
import { getCurrentUser } from './redux/auth/auth-operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  })

  return (
    <div>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegistrationView} />
        <Route path="/login" component={LogInView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </div>
  );
}

export default App;
