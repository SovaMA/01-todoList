import React from 'react'

export default function SearchItem({searchInput,setSearchInput}) {
  return (
    <form className='search_form' onSubmit={(e)=>{e.preventDefault()}}>
      <label className="label">Search Item</label>
      <input type="text" 
             placeholder='Search todo'
             className="search_input"
             value={searchInput}
             onChange={(e)=>{setSearchInput(e.target.value)}}
             />
    </form>
  )
}
