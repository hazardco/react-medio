import React, { createContext, useState } from 'react'

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  return (
    <TaskContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </TaskContext.Provider>
  )
}