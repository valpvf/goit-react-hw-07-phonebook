import { addContactApi, getContactApi, removeContactApi } from 'services/mockApi';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  getContactError,
  getContactRequest,
  getContactSuccess,
  removeContactError,
  removeContactRequest,
  removeContactSuccess,
} from './contactsSlice';

export const addContact = form => {
  return dispatch => {
    dispatch(addContactRequest());
    addContactApi(form)
      .then(contact => dispatch(addContactSuccess(contact)))
      .catch(err => dispatch(addContactError(err.message)));
  };
};

export const getContact = () => {
  return dispatch => {
    dispatch(getContactRequest());
    getContactApi()
      .then(data => dispatch(getContactSuccess(data)))
      .catch(err => dispatch(getContactError(err.message)));
  };
};

export const removeContact = (id) => {
  return dispatch => {
    dispatch(removeContactRequest());
    removeContactApi(id)
      .then(id => dispatch(removeContactSuccess(id)))
      .catch(err => dispatch(removeContactError(err.message)))
  };
};
