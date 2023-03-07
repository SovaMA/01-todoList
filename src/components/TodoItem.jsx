import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import DataContext from '../Context/Context';

export default function TodoItem({ id, title, completed }) {
  const { deleteTodo, checkTodo } = useContext(DataContext);
  return (
    <li className='item'>
      <input
        className='item_checkbox'
        type='checkbox'
        onChange={() => {
          checkTodo(id);
        }}
        checked={completed}
      />
      <p
        className={`item_title ${completed && 'line'}`}
        onDoubleClick={() => {
          deleteTodo(id);
        }}
        onClick={() => {
          checkTodo(id);
        }}>
        {title}
      </p>
      <FontAwesomeIcon
        role='button'
        tabIndex='0'
        className='item_delete'
        icon={faTrash}
        onClick={() => {
          deleteTodo(id);
        }}
      />
    </li>
  );
}
