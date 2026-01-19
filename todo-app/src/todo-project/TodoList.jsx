import { useState } from 'react'
import './Todolist.css'

function InputMessage({ task, setTask }) {
  <link rel="icon" type="image/svg+xml" href="/image.png" />

  const [input, setInput] = useState('')
  const [date, setDate] = useState('')
  if (!task) {
    <div>refreash the page</div>
  }
  function inputText(event) {
    setInput(event.target.value)
  }

  function dateInput(event) {
    setDate(event.target.value)
  }

  function addTodo() {
    if (input && date) {
      setTask([
        ...task,
        {
          message: input,
          duration: date,
          delete: 'delete'
        }
      ])
      setInput('')
      setDate('')
    }
  }

  return (
    <div className='input-button-container'>
      <input
        type={'text'}
        value={input}
        onChange={inputText}
        className='input-message'
        placeholder='type todo'
      />

      <input
        type='date'
        value={date}
        onChange={dateInput}
        className='input-date'
      />

      <button
        className='button-add'
        onClick={addTodo}
      >Add todo</button>
    </div>
  )
}

function Add({ task, setTask }) {
  return task.map((tasks, i) => {


    function deleteTask(i) {
      const removeTask = task.filter((_, index) => {
        return index !== i
      }
      )
      return setTask(removeTask)
    }

    return (
      <div key={i} className='task-container'>

        <div className='task-message'>{tasks.message}</div>

        <div className='task-duration'>{tasks.duration}</div>

        <button onClick={() => {
          deleteTask(i)
        }}>{tasks.delete}</button>

      </div>
    )
  })
}


export function TodoList() {


  const [task, setTask] = useState([]);



  return (
    <div className='container-div'>
      <InputMessage task={task} setTask={setTask} />
      <Add task={task} setTask={setTask} />
    </div>
  )
}