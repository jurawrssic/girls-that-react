import React, { useState } from 'react'

const AddToDo = ({ onAdd }) => {
  const [task, setTask] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if(!task) {
      alert("Please inform task!")
    }else{
      onAdd(task)
      setTask('')
    }
  }

  return (
    <form id='add-to-do-form' onSubmit={ onSubmit }>
      <div className='to-do-form'>
        <input placeholder='Enter your task to do...'
          value={ task }
          onChange={ e => setTask(e.target.value) }>
        </input>

        <button className='add-to-do-button' type='submit'>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </form>
  )
}

export default AddToDo
