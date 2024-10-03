import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import { TaskProvider } from "./app/contexts/TaskContext"
import { Dashboard } from './app/modules/Dashboard/Dashboard'
import { Layout } from './app/layout/Layout'
import { Forms } from './app/modules/Forms/Forms'
import { ContextForms } from "./app/modules/ContextForms/ContextForms"
import React from "react"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/forms",
        element: <Forms />,
      }
      ,
      {
        path: "/contextforms",
        element: <ContextForms />,
      }
    ]
  },
])

function App() {
  return (
    <React.StrictMode>
      <TaskProvider>
        <RouterProvider router={router} />
      </TaskProvider>
    </React.StrictMode>
  )
}
export default App