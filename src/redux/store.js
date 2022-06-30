import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './slice';
import { contactsApi } from 'services/api';

const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

export { store };
