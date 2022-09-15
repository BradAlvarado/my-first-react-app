import TaskCard from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import { GoCircleSlash } from 'react-icons/go'

function TaskList() {

  const { tasks } = useContext(TaskContext)

  if (tasks.length === 0) {
    return (
      <div className="bg-slate-600 text-white p-3 rounded-md max-w-xs inline-flex items-center">
        <h2 className='text-lg'>There are no tasks yet &nbsp;</h2> <GoCircleSlash />
      </div>
    )
  }

  return (
    <div className='grid lg:grid-cols-4 grid-cols-2 gap-2'>
      {
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))
      }

    </div>
  )
}

export default TaskList