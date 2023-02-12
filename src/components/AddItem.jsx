import React from 'react'

export default function AddItem({titleInput,setTitleInput,addTodo}) {
  return (
    <form className='add_form' onSubmit={(e)=> e.preventDefault()}>
      <label className="label">Add Todo</label>
      <input type="text" 
             placeholder='Add todo'
             className="add_input"
             value={titleInput}
             onChange={(e)=>{setTitleInput(e.target.value)}}/>
      <button className='add_btn' onClick={addTodo}>Add Todo</button>              
    </form>
  )
}
