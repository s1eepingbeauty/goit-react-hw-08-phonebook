import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LogInView = () => {
  const [email, setEmail] = useState(INITIAL_STATE.email);
  const [password, setPassword] = useState(INITIAL_STATE.password);
  const dispatch = useDispatch();

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    // const isValidatedForm = validateForm();
    // if (!isValidatedForm) return;

    const newUser = {
      email,
      password,
    };

    dispatch(logIn(newUser));
    resetForm();
  };

  //   const validateForm = () => {
  //         if (!email || !password) {
  //             alert('Some field is empty');
  //             return false;
  //         }
  //   };

  const resetForm = () => {
    setEmail(INITIAL_STATE.email);
    setPassword(INITIAL_STATE.password);
  };

  return (
    <div>
      <h1>LogIn page</h1>
      <form onSubmit={handleSubmitForm} autoComplete="off">
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
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};

export default LogInView;
