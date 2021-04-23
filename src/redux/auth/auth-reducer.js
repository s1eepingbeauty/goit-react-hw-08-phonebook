import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  logInSuccess,
  logInError,
  logOutSuccess,
  logOutError,
  registerSuccess,
  registerError,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [logInSuccess]: (_, { payload }) => payload.user,
  [logOutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, {payload}) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [logInSuccess]: (_, { payload }) => payload.token,
  [logOutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [registerError]: setError,
  [logInError]: setError,
  [logOutError]: setError,
  [getCurrentUserError]: setError});

export default combineReducers({
  user,
  token,
  error,
});
