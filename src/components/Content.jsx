import React from 'react'
import { useContext } from 'react'
import DataContext from '../Context/Context'
import TodoList from './TodoList'


export default function Content() {
  const {numberOfTodos} = useContext(DataContext)
  return (
    <>
    {numberOfTodos ? (
      <TodoList/>
    ) : (
      <h2 className='empty_content'>You don't add anything</h2>
    ) }
    </>
  )
}

