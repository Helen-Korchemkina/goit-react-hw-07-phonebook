import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { getFilter } from 'redux/selectors';
import { useGetContactsQuery, useDeleteContactsMutation } from 'services/api';
import { FcFullTrash, FcBusinessman } from 'react-icons/fc';
import Loader from 'components/Loader/Loader';
import s from './ContactList.module.css';
import toast from 'react-hot-toast';

const ContactList = () => {
  const [deleteContact, { isLoading: isDeliting }] =
    useDeleteContactsMutation();
  const { data, isFetching } = useGetContactsQuery();
  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLowerCase().trim();
  const contacts = data
    ?.map(item => item.name.toLowerCase().includes(normalizedFilter) && item)
    .filter(item => item !== false)
    .sort((a, b) => a.name.localeCompare(b.name));
  
  const onDeleteContact = (id, name) => {
    deleteContact(id);
    toast.success(`Contact ${name} has been deleted`)
  }

  return (
    <ul className={s.list}>
      {contacts &&
        !isFetching &&
        contacts.map(({ id, name, phone }) => (
          <li className={s.contact} key={id}>
            <span>
              <FcBusinessman />
            </span>
            <p>{name}:</p>
            <p>{phone}</p>
            <button
              className={s.btn}
              type="button"
              onClick={() => onDeleteContact(id, name)}
              disabled={isDeliting}
            >
              {isDeliting ? <span>Deliting...</span> : <span>Delete</span>}{' '}
              <FcFullTrash />
            </button>
          </li>
        ))}
      {isFetching === true && <Loader />}
    </ul>
  );
};

export default ContactList;
