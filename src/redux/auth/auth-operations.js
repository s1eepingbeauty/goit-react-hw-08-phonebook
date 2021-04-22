import axios from 'axios';
import {
  logInError,
  logInRequest,
  logInSuccess,
  logOutError,
  logOutRequest,
  logOutSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`; //Bearer - носитель token
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /user/signup
 * body { name, email, password }
 *
 * После успешной регистрации добавляем token в HTTP-заголовок
 */
export const register = credentials => dispatch => {
  dispatch(registerRequest());
  axios
    .post('/users/signup', credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(registerSuccess(data));
    })
    .catch(error => dispatch(registerError(error.message)));
};

/*
 * POST @ /user/login
 * body { email, password }
 *
 * После успешного logIn добавляем token в HTTP-заголовок
 */
export const logIn = credentials => dispatch => {
  dispatch(logInRequest());
  axios
    .post('/users/login', credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(logInSuccess(data));
    })
    .catch(error => dispatch(logInError(error.message)));
};

/*
 * POST @ /user/logout
 * headers:
 *    Authorization: Bearer token
 *
 * После успешного logOut удаляем token из HTTP-заголовка
 */
export const logOut = () => dispatch => {
  dispatch(logOutRequest());
  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(logOutSuccess());
    })
    .catch(error => dispatch(logOutError(error.message)));
};

/*
 * GET @ /user/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем token из state через getState()
 * 2. Если token нет - выходим, не выполняя никаких операций
 * 3. Если token есть - добавляем его в HTTP-заголовок и выполняем операцию
 */
export const getCurrentUser = () => (dispatch, getSate) => {};
