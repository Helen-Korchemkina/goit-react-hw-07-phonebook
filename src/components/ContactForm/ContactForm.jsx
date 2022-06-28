import React from 'react';
import { addContact } from 'redux/slice';
import { useDispatch } from 'react-redux/es/exports';
import { FcTwoSmartphones } from 'react-icons/fc';
import { Formik, Form, Field } from 'formik';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ( {name, number}, { resetForm }) => {
    dispatch(addContact({ name, number }));
    resetForm();
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
          <span>Add contact</span> <FcTwoSmartphones />
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
