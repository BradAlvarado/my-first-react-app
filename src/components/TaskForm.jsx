import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import { GoPlus, GoTag, GoDiffIgnored } from "react-icons/go";

function TaskForm() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState("")
    const { createTask } = useContext(TaskContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description
        })

        setTitle('')
        setDescription('')
    }

    return (
        <div className="max-w-md mx-auto p-10">
            <form onSubmit={handleSubmit} className='bg-slate-700 mb-5 p-5 rounded-md'>

                <h1 className='text-lg font-bold text-white'>Add your Tasks</h1>

                <input placeholder="Type your task"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="bg-slate-200 w-full my-4 p-1 rounded-md"
                    autoFocus required
                />

                <textarea placeholder='Type the description '
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="bg-slate-200 w-full p-1 rounded-md resize-none"
                ></textarea>


                <div className="mt-5 text-md">
                    <button className='bg-teal-600 hover:bg-teal-500 text-white font-bold py-1 px-4 rounded inline-flex items-center mr-3'>Add <GoPlus />
                    </button>
                    <input type="reset" value='Reset' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded inline-flex items-center' onClick={() =>{
                        setTitle('')
                        setDescription('')
                    }}/>

                </div>



            </form>
        </div>

    )
}

export default TaskForm