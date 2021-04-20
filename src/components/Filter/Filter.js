import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import styles from './styles.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const addFilter = value => {
    dispatch(filterContacts(value.toLowerCase()));
  };

  return (
    <input
      className={styles.contactFormFilter}
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => addFilter(target.value)}
      placeholder="Enter name for Search"
    />
  );
};

export default Filter;
