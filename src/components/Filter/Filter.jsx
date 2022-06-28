import React from 'react';
import { changeFilter } from 'redux/slice';
import { useDispatch } from 'react-redux/es/exports';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input className={s.input} type="text" onChange={onChangeFilter} />
    </label>
  );
};

export default Filter;
