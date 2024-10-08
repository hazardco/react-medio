import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './tasksSlice'
import catsReducer from './catsSlice'
import { saveToLocalStorage } from '@/lib/localstorage';

export const store = configureStore({
  reducer: {
    tasksReducer: tasksReducer,
    catsReducer: catsReducer
  },
})

store.subscribe(() => {
    saveToLocalStorage("taskList" ,store.getState().tasksReducer.taskList);
})

export default store