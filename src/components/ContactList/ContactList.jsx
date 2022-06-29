import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getVisibleContacts } from 'redux/selectors';
import { changeContacts } from 'redux/slice';
import { useGetContactsQuery, useDeleteContactsMutation } from 'services/api';
import { FcFullTrash, FcBusinessman } from 'react-icons/fc';
import s from './ContactList.module.css';
import { useEffect } from 'react';
 import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const dispatch = useDispatch();
  
  const { data, isFetching } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactsMutation();

  useEffect(() => {
    dispatch(changeContacts(data));
  }, [dispatch, data, isFetching])

  const contacts = useSelector(getVisibleContacts);
  
  return (
    <ul className={s.list}>
{      contacts && !isFetching &&
(      contacts.map(({ id, name, phone }) => (
        <li className={s.contact} key={id}>
          <span>
            <FcBusinessman />
          </span>
          <p>{name}:</p>
          <p>{phone}</p>
          <button
            className={s.btn}
            type="button"
      onClick={()=> deleteContact(id) }
          >
            <span>Delete</span> <FcFullTrash />
          </button>
        </li>
      )))
      }
      {isFetching===true && <Loader/>}
    </ul>
  )

  

};

export default ContactList;
