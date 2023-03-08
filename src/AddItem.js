import React from 'react'
import { FaPlus } from 'react-icons/fa';
import {useRef} from 'react';
const AddItem = ({newItems, setNewItems, handleSubmit}) => {
  const inputRef=useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">
            <input
            autoFocus
            ref={inputRef}
            id='addItem' 
            type="text"
            placeholder='Add Item'
            required
            value={newItems}
            onChange={(e)=>setNewItems(e.target.value)}
            />
            <button
            type='submit'
            aria-label='Add Item'
            onClick={()=>inputRef.current.focus()}
            >
                <FaPlus></FaPlus>
            </button>
        </label>
    </form>
  )
}

export default AddItem