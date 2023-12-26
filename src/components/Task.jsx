const Task = ({ task, onDelete, onToggleDone }) => {
  return (
    <li>
      <span
        onClick={onToggleDone}
        style={{ textDecoration: task.done ? 'line-through' : 'none' }}
      >
        {task.text}
      </span>
      <button className="btn-del" onClick={onDelete}>
        Remover
      </button>
    </li>
  )
}

export default Task
