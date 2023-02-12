import React from 'react'
import TodoList from './TodoList'

export default function Content({todos,deleteTodo,numberOfTodos,checkTodo}) {
  return (
    <>
    {numberOfTodos ? (
      <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
    ) : (
      <h2 className='empty_content'>You don't add anything</h2>
    ) }
    
    </>
  )
}
