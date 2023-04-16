import React, { useState } from 'react'
import trashIcon from '../assets/trash-solid.svg'

const Todo = (props) => {
  const [completed, setCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  }

  return (
    <div className='Todo'>
      <p
        className={`${completed ? "completed" : ""}`}
      >
        {props.task.task}</p>
      <div className='todo-buttons'>
      {/* checkbox */}
      <input 
        type='checkbox'
        title='Mark as Completed'
        className='checkbox'
        checked={completed}
        onChange={handleCheckboxChange}
      />

      {/* delete button */}
      <button 
          title='Delete' 
          className='deleteTodo'
          onClick={props.onDelete}>
          <img className='trash-icon' src={trashIcon} alt="trash-icon" />
        </button>
      </div>
    </div>
  )
}

export default Todo