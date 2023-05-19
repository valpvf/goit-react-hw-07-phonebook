import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import contactsReducer from './contactsSlice';
import logger from 'redux-logger';

const thunk = store => next => action => {
  if (typeof action === 'function') {
    action(store.dispatch, store.getState);
    return;
  }
  next(action);
};

// const contactsConfigure = { key: 'contacts', storage, whitelist: ['contacts'] };
// const rootReducer = combineReducers({
//   phoneBook: persistReducer(contactsConfigure, contactsReducer),
// });

export const store = configureStore({
  reducer: contactsReducer,
  // rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    // middleware: getDefaultMiddleware => [
    //   ...getDefaultMiddleware({
    //     serializableCheck: {
    //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //     },
    //   }),
    logger,
    thunk,
  ],
});

// export const persistor = persistStore(store);
