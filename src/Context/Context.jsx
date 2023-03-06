import {useState,useEffect,createContext} from 'react'
import { nanoid } from "nanoid"

const DataContext = createContext();
  
 export const DataProvider = ({children}) => {
  //States
 
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [titleInput, setTitleInput] = useState('')
  const [searchInput, setSearchInput] = useState('')
  //useEffect
  useEffect(() => {
   localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
   // Functions
   const addTodo = () => {
     const todo = [
       {
         id:nanoid(5),
         title:titleInput,
         completed:false
       },
       ...todos,
     ]
     titleInput && setTodos(todo);
     setTitleInput('')
   }
 
   const deleteTodo = (id) => {
     const filteredTodos = todos.filter(todo=> todo.id !== id)
     setTodos(filteredTodos)
   }
   
   const checkTodo = (id) => {
     const checkedTodo = todos.map(todo => todo.id === id ? {...todo,completed:!todo.completed}:todo);
     setTodos(checkedTodo)
   }

  //  const searchTodos = () => {
  //  const searchedTodo = todos.filter(todo => todo.title.toLowerCase().includes(searchInput.toLowerCase()))
  //  return searchedTodo
  //  }
  //  console.log(searchTodos)
 
   const numberOfTodos = todos.length;
 
   const value ={
     numberOfTodos,
     todos,
     setTodos,
     titleInput, 
     setTitleInput,
     searchInput, 
     setSearchInput,
     addTodo,
     deleteTodo,
     checkTodo,
    //  searchTodos
   }
  return(
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}


export default DataContext;

  
