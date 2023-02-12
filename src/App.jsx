//Components
import AddItem from "./components/AddItem"
import Footer from "./components/Footer"
import Header from "./components/Header"
import SearchItem from "./components/SearchItem"
import Content from "./components/Content"
import {useState, useEffect } from "react"
import { nanoid } from "nanoid"




function App() {
  //States
 const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
 const [titleInput, setTitleInput] = useState('')
 const [searchInput, setSearchInput] = useState('')
 //useEffect
 useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
 }, [todos])
 
  //Functions
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
    
  return (
    <div className="App">
      <Header title='My todo list'/>
      <AddItem titleInput={titleInput} setTitleInput={setTitleInput} addTodo={addTodo}/>
      <SearchItem searchInput={searchInput} setSearchInput={setSearchInput}/>
      <main className="main">
        <Content todos={todos.filter(todo => todo.title.toLowerCase().includes(searchInput.toLowerCase()))} 
                 deleteTodo={deleteTodo} 
                 numberOfTodos={todos.length} 
                 checkTodo={checkTodo}
                 searchInput={searchInput}
          />
      </main>
      <Footer numberOfTodos={todos.length}/>
    </div>
  )
}

export default App
