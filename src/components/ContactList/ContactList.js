import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import styles from './styles.module.css';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.contactListItem}>
      <button
        className={styles.removeBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        X
      </button>
      {name}: {number}
    </li>
  );
};

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  if (contacts.length === 0) return null;
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
