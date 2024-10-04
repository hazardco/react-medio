import { useSelector, useDispatch } from "react-redux"
import { addTask, doneTask, deleteTask } from "../../redux/tasksSlice"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Trash2,
} from "lucide-react"

import { useState } from "react"

export const ReduxForms = () => {

    const taskList = useSelector((state) => state.tasksReducer.taskList)
    const dispatch = useDispatch()

    //const [taskList, setTaskList] = useState([])
    const [newTask, setNewTask] = useState({
        task: "",
        done: false
    })
    const [error, setError] = useState("")

    const handleChange = (e) => {
        setNewTask({
            ...newTask,
            [e.target.name]: e.target.value
        })
        setError("")
    }

    const handleCheckboxChange = (index) => {
        dispatch(doneTask(index))
    }

    const handleClick = (index) => {
        dispatch(deleteTask(index))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newTask.task.trim().length === 0) {
            setError("El campo no puede estar vacío")
            return
        }
        if (newTask.task.trim().length < 10) {
            setError("El campo debe tener al menos 10 caracteres")
            return
        }
        //setTaskList([
        //    ...taskList, newTask
        //])
        dispatch(addTask(newTask))

        setNewTask({
            task: "",
            done: false
        })
    }

    return (
        <div className="grid grid-cols-2 gap-4">
            <Card>
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>REDUX Forms</CardTitle>
                        <CardDescription>
                            Basic Form Example.
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="task" className="block text-sm font-medium text-gray-700">
                                Task
                            </label>
                            <input
                                type="text"
                                id="task"
                                name="task"
                                value={newTask.task}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Insert new task"
                            />
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>TO DO</CardTitle>
                        <CardDescription>
                            Things to do.
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    {
                        taskList.map(({ task, done }, index) => (
                            <div key={index} className="flex items-center space-x-3 p-2">
                                <input
                                    type="checkbox"
                                    name="done"
                                    checked={done}
                                    onChange={() => handleCheckboxChange(index)}
                                    className="form-checkbox h-5 w-5 text-indigo-600 rounded-md focus:ring-indigo-500"
                                />
                                <span className={`text-gray-700 ${done ? 'line-through' : ''}`}>{task}</span>
                                <span>
                                    <button onClick={() => handleClick(index)}>
                                        <Trash2 className="text-red-500" />
                                    </button>
                                </span>
                            </div>
                        )
                        )
                    }

                </CardContent>
            </Card>
        </div >
    )
}