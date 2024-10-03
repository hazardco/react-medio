import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import { Dashboard } from './app/modules/Dashboard/Dashboard'
import { Layout } from './app/layout/Layout'
import { Forms } from './app/modules/Forms/Forms'

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
    ]
  },
])

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}
export default App