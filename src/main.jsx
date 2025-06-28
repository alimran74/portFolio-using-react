import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layouts/MainLayout'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <RouterProvider router={router}/>

  </StrictMode>,
)
