import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './tasksSlice'
import { saveToLocalStorage } from '@/lib/localstorage';

export const store = configureStore({
  reducer: {
    tasksReducer: tasksReducer,
  },
})

store.subscribe(() => {
    saveToLocalStorage("taskList" ,store.getState().tasksReducer.taskList);
})

export default store