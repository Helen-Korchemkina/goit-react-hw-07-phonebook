import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      const isContact = state.items.find(
        item => item.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (isContact) {
        toast.error(`${action.payload.name} is already in contact`);
        return;
      } else {
        state.items.unshift({
          id: nanoid(),
          name: action.payload.name,
          phone: action.payload.number,
        });
      }
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
    changeContacts(state, action) {
      state.items = action.payload;
    },
  },
});

export const { addContact, deleteContact, changeFilter, changeContacts } =
  contactsSlice.actions;
export default contactsSlice.reducer;
