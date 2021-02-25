import ToDo from './ToDo'

const ToDoList = ({ tasks, onMark }) => {

  const handleMark = (taskID) => {
    onMark(taskID)
  }

  return (
    <div className='to-do-list'>
      {tasks.map((task, index)=> (
        <ToDo key={ index } id={ task.id } text={ task.text } done={ task.done } onMark={ handleMark } />
      ))}
    </div>
  )
}

export default ToDoList
