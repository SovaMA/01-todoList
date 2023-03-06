import React,{useContext} from 'react'
import DataContext from '../Context/Context'



export default function Footer() {
  const {numberOfTodos} = useContext(DataContext);
  return (
    <footer className="footer"><p>You have {numberOfTodos} {numberOfTodos === 1 ? 'task' : 'tasks'}</p> </footer>
  )
}
