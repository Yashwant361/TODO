import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    try {
      const saveTodos = localStorage.getItem('todos')
      if (saveTodos) {
        const parsedTodos = JSON.parse(saveTodos)
        setTodos(parsedTodos)
      }
    } catch (error) {
      console.error('Error loading todos:', error)
    }
  }, [])

  useEffect(() => {
    if (todos.length > 0) {
      try {
        localStorage.setItem('todos', JSON.stringify(todos))
      } catch (error) {
        console.error('Error saving todos:', error)
      }
    }
  }, [todos])
  
  function handleSubmit(e) {
    e.preventDefault();

    if (todo !== '') {
      if (editId) {
        setTodos(todos.map((t) => t.id === editId ? { ...t, todo } : t))
        setEditId(null)
      } else {
        setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
      }
      setTodo('');
    }
  }

  function handleEdit(id) {

    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo)
    setEditId(id)

  }
  function handleDelete(id) {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo])
    if (delTodo.length === 0) {
      localStorage.removeItem('todos')
    }
  }

  return (
    <>
      <div className='App'>
        <div className='container'>
          <h1>Todo List App</h1>
          <form
            className='todoForm'
            onSubmit={handleSubmit}
          >
            <input type='text'
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button type='submit'>{editId ? 'Update' : 'Add'}</button>
          </form>

          <ul className='allTodos'>
            {
              todos.map((task) => {
                return (
                  <li key={task.id} className='singleTodo'>
                    <span className='todoText'>{task.todo}</span>
                    <button onClick={() => handleEdit(task.id)}>Edit</button>

                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App