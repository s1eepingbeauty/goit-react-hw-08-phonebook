import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  logInSuccess,
  logOutError,
  logOutSuccess,
  registerError,
  registerSuccess,
} from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [logInSuccess]: (_, { payload }) => payload.user,
  [logOutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [logInSuccess]: (_, { payload }) => payload.token,
  [logOutSuccess]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [logInSuccess]: (_, { payload }) => payload,
  [logOutError]: (_, payload) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
