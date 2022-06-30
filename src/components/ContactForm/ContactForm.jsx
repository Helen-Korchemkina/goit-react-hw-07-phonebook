import React from 'react';
import { FcTwoSmartphones } from 'react-icons/fc';
import { Formik, Form, Field } from 'formik';
import { useAddContactMutation } from 'services/api';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [addContact, { isLoading }] = useAddContactMutation();
  const contacts = useSelector(getContacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const isContact = contacts?.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContact) {
      toast.error(`${name} is already in contact`);
      return;
    } else {
      addContact({ name, number });
      toast.success(`Сontact with ${name} added`);
      resetForm();
    }
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <Form className={s.submit}>
        <label className={s.label}>
          Name
          <Field
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.label}>
          Number
          <Field
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={s.btn} type="submit">
          {isLoading ? <span>Loading...</span> : <span>Add contact</span>}
          <FcTwoSmartphones />
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
