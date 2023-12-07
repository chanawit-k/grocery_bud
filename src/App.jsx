import { useState } from 'react'
import Form from './Form'
import ListItems from './ListItems'
import { v4 as uuidv4 } from 'uuid'
import { ToastContainer, toast } from 'react-toastify'

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const getLocalStorage = () => {
  let itemFromStorage = localStorage.getItem('list')
  itemFromStorage = itemFromStorage
    ? JSON.parse(localStorage.getItem('list'))
    : []
  return itemFromStorage
}
const App = () => {
  getLocalStorage(getLocalStorage())
  const [itemsList, setItemsList] = useState(getLocalStorage)
  const addItem = (item) => {
    const newItems = [
      ...itemsList,
      { id: uuidv4(), item: item, isFinised: false },
    ]
    setItemsList(newItems)
    setLocalStorage(newItems)
  }

  const finishedTask = (id) => {
    const newItemList = itemsList.map((item) => {
      if (item.id === id) {
        const newStatus = item.isFinised ? false : true
        return { ...item, isFinised: newStatus }
      } else {
        return item
      }
    })
    setItemsList(newItemList)
  }

  const deleteItem = (id) => {
    const newItemList = itemsList.filter((item) => {
      return item.id !== id
    })
    setItemsList(newItemList)
    setLocalStorage(newItemList)
    toast.success('Delete Item Success')
  }

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <ListItems
        items={itemsList}
        finishedTask={finishedTask}
        deleteItem={deleteItem}
      />
    </section>
  )
}

export default App
