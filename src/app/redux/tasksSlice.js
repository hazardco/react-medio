import { initialStateLocalStore } from "@/lib/localstorage"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    taskList: initialStateLocalStore("taskList") || []
}

const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.taskList.push(action.payload)
        },

        doneTask: (state, action) => {
            state.taskList = state.taskList.map((task, index) => {
                if (index === action.payload) {
                    return { ...task, done: !task.done }
                }
                return task
            })
        },

        deleteTask: (state, action) => {
            state.taskList = state.taskList.filter((task, index) => {
                if (index != action.payload) {
                    return task
                }
            })
        },
    }
})

export const { addTask, doneTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer