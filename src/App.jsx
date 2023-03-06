//Components
import AddItem from "./components/AddItem"
import Footer from "./components/Footer"
import Header from "./components/Header"
import SearchItem from "./components/SearchItem"
import Content from "./components/Content"
import {useState, useEffect } from "react"
import { useContext } from "react"
import DataContext from "./Context/Context"

function App() {
const searchTodos = () => {todos.filter(todo => todo.title.toLowerCase().includes(searchInput.toLowerCase()))
}
const {todos,searchInput} = useContext(DataContext);
return (
    <div className="App">
      <Header title='My todo list'/>
      <AddItem />
      <SearchItem/>
      <main className="main">
        <Content 
            todos={todos.filter(todo => todo.title.toLowerCase().includes(searchInput.toLowerCase()))}
        />
      </main>
      <Footer/>
    </div>
)
}

export default App
