import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';
import styles from './styles.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const RegistrationView = () => {
  const [name, setName] = useState(INITIAL_STATE.name);
  const [email, setEmail] = useState(INITIAL_STATE.email);
  const [password, setPassword] = useState(INITIAL_STATE.password);
  const dispatch = useDispatch();

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    // const isValidatedForm = validateForm();
    // if (!isValidatedForm) return;

    const newUser = {
      name,
      email,
      password,
    };

    dispatch(register(newUser));
    resetForm();
  };

  // const onCheckUnique = email => {
  //     const isExistUser = !!users.find(user => user.email === email);
  //     isExistUser && alert(`User with ${email} is already registered!`);
  //     return !isExistUser;
  // };

  const validateForm = () => {
    if (!name || !email || !password) {
      alert('Some field is empty');
      return false;
    }
    //return onCheckUnique(email);
  };

  const resetForm = () => {
    setName(INITIAL_STATE.name);
    setEmail(INITIAL_STATE.email);
    setPassword(INITIAL_STATE.password);
  };

  return (
    <div>
      {/* <h1>Registration page</h1> */}
      <form className={styles.registrationForm} onSubmit={handleSubmitForm} autoComplete="off">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeForm}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChangeForm}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangeForm}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationView;
