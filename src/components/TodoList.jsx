import React from 'react'
import TodoItem from "./TodoItem"

export default function TodoList({todos,deleteTodo,checkTodo,}) {
  return (
    <ul className="items">
      {todos.map(todo=> 
        <TodoItem key={todo.id}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
          {...todo}
        />)}
    </ul>
  )
}


