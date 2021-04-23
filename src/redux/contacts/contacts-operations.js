import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

//GET @ /contacts
export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error.message)));
};

//POST @ /contacts
export const addContact = newContact => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('/contacts', newContact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

//DELETE @ /contacts/{contactId}
export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

//PATCH @ /contacts/{contactId}
// export const editContact = id => dispatch => {
//   dispatch(editContactRequest());
//   axios
//     .update(`/contacts/${id}`)
//     .then(() => dispatch(editContactSuccess(id)))
//     .catch(error => dispatch(editContactError(error.message)));
// };