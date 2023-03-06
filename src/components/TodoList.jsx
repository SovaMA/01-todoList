import React from 'react'
import { useContext } from 'react'
import DataContext from '../Context/Context'
import TodoItem from "./TodoItem"

export default function TodoList() {
  const {todos,searchInput} = useContext(DataContext);
  return (
    <ul className="items">
      {todos.filter(todo => todo.title.toLowerCase().includes(searchInput.toLowerCase())).map(todo=> 
        <TodoItem 
          key={todo.id}
          {...todo}
        />)}
    </ul>
  )
}


