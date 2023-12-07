import React, { useState } from 'react'

const ListItems = ({ items, finishedTask, deleteItem }) => {
  return (
    <div className="items">
      {items.map((item, index) => {
        return (
          <div className="single-item" key={index}>
            <input
              type="checkbox"
              onChange={() => {
                finishedTask(item.id)
              }}
              checked={item.isFinised}
            />
            <p style={item.isFinised ? { textDecoration: 'line-through' } : {}}>
              {item.item}
            </p>
            <button
              type="button"
              className="btn remove-btn"
              onClick={() => deleteItem(item.id)}
            >
              Delete
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default ListItems
