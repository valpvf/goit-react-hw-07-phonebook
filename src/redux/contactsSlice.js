const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  contacts: [],
  // JSON.parse(localStorage.getItem('contacts')) ?? [],
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
    remove: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    filtered: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContactRequest, addContactSuccess, addContactError, remove, filtered } = contactsSlice.actions;

export default contactsSlice.reducer;
