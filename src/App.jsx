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
import { Cats } from "./app/modules/Cats/Cats"
import { ShadcnIndex } from "./app/modules/ShadcnDemo/pages/ShadcnIndex"
import { Toaster } from "sonner"
import { Toaster as SimpleToaster } from "@/components/ui/toaster"
import { FormIndex } from "./app/modules/Forms/pages/FormIndex"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PrivateRoute element={<Dashboard />} />,
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
      {
        path: "/cats",
        element: <Cats />,
      },
      {
        path: "/shadcn",
        element: <ShadcnIndex />,
      },
      {
        path: "/formularios",
        element: <FormIndex />,
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
        <Toaster position="top-center" richColors />
        <TaskProvider>
          <SimpleToaster />
          <RouterProvider router={router} />
        </TaskProvider>
      </Provider>
    </React.StrictMode>
  )
}
export default App