import React from 'react'
import { FaPlus } from 'react-icons/fa';
const AddItem = ({newItems, setNewItems, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">
            <input
            autoFocus
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
            >
                <FaPlus></FaPlus>
            </button>
        </label>
    </form>
  )
}

export default AddItem