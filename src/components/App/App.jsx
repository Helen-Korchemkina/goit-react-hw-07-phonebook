import React from 'react';
import { Toaster } from 'react-hot-toast';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import s from './App.module.css';

const App = () => (
  <div className={s.form}>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
    <Toaster />
  </div>
);

export default App;
