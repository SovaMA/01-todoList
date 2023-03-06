import React, { useContext } from 'react'
import DataContext from '../Context/Context'



export default function SearchItem() {
const {searchInput,setSearchInput} = useContext(DataContext);
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
