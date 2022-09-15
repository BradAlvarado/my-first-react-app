import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import { GoTrashcan } from "react-icons/go";

function TaskCard({ task }) {

    const { deleteTask } = useContext(TaskContext)

    return (
        <div className='bg-slate-600 text-white p-3 rounded-md'>
            <h2 className='text-xl'>Title: {task.title}</h2>
            <p className='text-sm text-gray-400'>Description: {task.description}</p>

            <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-md px-4 py-1.5 text-center mr-2 mt-4 inline-flex items-center" onClick={() => deleteTask(task.id)}>Delete <GoTrashcan /> </button>

        </div>
    )
}

export default TaskCard