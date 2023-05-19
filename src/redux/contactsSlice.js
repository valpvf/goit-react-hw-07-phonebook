const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
  filter: '',
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactRequest(state) {
      state.isLoading = true;
    },
    addContactSuccess(state, { payload }) {
      state.isLoading = false;
      state.contacts.push(payload);
    },
    addContactError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    getContactRequest(state) {
      state.isLoading = true;
    },
    getContactSuccess(state, { payload }) {
      state.isLoading = false;
      state.contacts = payload;
    },
    getContactError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    removeContactRequest(state) {
      state.isLoading = true;
    },
    removeContactSuccess(state, { payload }) {
      state.isLoading = false;
      state.contacts = state.filter(el => el.id !== payload);
    },
    removeContactError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    filtered: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  filtered,
} = contactsSlice.actions;

export default contactsSlice.reducer;
