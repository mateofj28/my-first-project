import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CrudStudents from './components/CrudStudents.jsx'
import CreateStudents from './components/CreateStudents.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <CrudStudents />
  },
  {
    path: "createStudent",
    element: <CreateStudents />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
