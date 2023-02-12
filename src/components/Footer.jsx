import React from 'react'

export default function Footer({numberOfTodos}) {
  return (
    <footer className="footer"><p>You have {numberOfTodos} {numberOfTodos === 1 ? 'task' : 'tasks'}</p> </footer>
  )
}
