import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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
          number: action.payload.number,
        });
      }
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;
export default contactsSlice.reducer;
