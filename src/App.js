import { useState, useEffect } from 'react'
import Task from './Task'
import './App.css'

const defaultTasks = [
  {
    id: crypto.randomUUID(),
    title: 'Take out the trash',
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'Do laundry',
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'Go to MHacks',
    completed: true,
  },
]

function App() {
  const getTasksFromStorage = () => {
    const storedTasks =
      JSON.parse(localStorage.getItem('tasks')) || defaultTasks
    return storedTasks
  }

  const [tasks, setTasks] = useState(getTasksFromStorage)
  const [taskInput, setTaskInput] = useState('')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleAddTask = () => {
    if (!taskInput) return

    const newTask = {
      id: crypto.randomUUID(),
      title: taskInput,
      completed: false,
    }

    setTasks([newTask, ...tasks])
    setTaskInput('')
  }

  const toggleCompleted = (id, checked) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) return { ...task, completed: checked }
        return task
      })
    )
  }

  return (
    <div className="App">
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button className="addButton" onClick={() => handleAddTask()}>
        +
      </button>
      {tasks.map((task) => (
        <Task task={task} toggleCompleted={toggleCompleted} />
      ))}
    </div>
  )
}

export default App