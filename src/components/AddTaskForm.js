import React from 'react'

function AddTaskForm({handleSubmit,newTask,handleInputChange}) {
  return (
    <form onSubmit={handleSubmit} className="form">
        <label htmlFor="newitem">Add To do list</label>
        <input
          type="text"
          id="newitem"
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="submit">Add item</button>
      </form>
  )
}

export default AddTaskForm