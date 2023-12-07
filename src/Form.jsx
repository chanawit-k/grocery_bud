import React, { useState } from 'react'

const Form = ({ addItem }) => {
  const [item, setItem] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(item)
    setItem('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          name="groceryItem"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit" className="btn">
          Add Items
        </button>
      </div>
    </form>
  )
}

export default Form
