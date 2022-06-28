import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/slice';
import { FcFullTrash, FcBusinessman } from 'react-icons/fc';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getVisibleContacts);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contact} key={id}>
          <span>
            <FcBusinessman />{' '}
          </span>
          <p>{name}:</p>
          <p>{number}</p>
          <button
            className={s.btn}
            type="button"
            onClick={() => dispatch(deleteContact({ id }))}
          >
            <span>Delete</span> <FcFullTrash />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
