import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import { TaskProvider } from "./app/contexts/TaskContext"
import { Dashboard } from './app/modules/Dashboard/Dashboard'
import { Layout } from './app/layout/Layout'
import { Forms } from './app/modules/Forms/Forms'
import { ContextForms } from "./app/modules/ContextForms/ContextForms"
import React from "react"
import { ReduxForms } from "./app/modules/ReduxForms/ReduxForms"

import { Provider } from "react-redux"
import { store } from "./app/redux/store"
import { LoginForm } from "./app/modules/LoginForm/Login"
import { PrivateRoute } from "./app/routes/PrivateRoute"
import { Toaster } from "./components/ui/sonner"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PrivateRoute element={<Dashboard />}/>,
      },
      {
        path: "/forms/basic",
        element: <Forms />,
      }
      ,
      {
        path: "/forms/contextforms",
        element: <ContextForms />,
      },
      {
        path: "/forms/reduxforms",
        element: <ReduxForms />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  }
])

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <TaskProvider>
          <Toaster position="top-right"/>
          <RouterProvider router={router} />
        </TaskProvider>
      </Provider>
    </React.StrictMode>
  )
}
export default App