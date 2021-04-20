import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { isLoading } from './redux/contacts/contacts-selectors';
import styles from './styles.module.css';

const App = () => {
  const showSpinner = useSelector(isLoading);
  return (
    <div className={styles.phoneBookContainer}>
      <div className={styles.phoneBook}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={styles.contacts}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        <Loader
          className={styles.spinner}
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            visible={showSpinner}
        />
      </div>
    </div>
  );
};

export default App;
