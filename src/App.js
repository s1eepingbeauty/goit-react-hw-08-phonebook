import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import RegistrationView from './views/RegistrationView';
import LogInView from './views/LogInView';
import ContactsView from './views/ContactsView';

const App = () => (
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

export default App;
