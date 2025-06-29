import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layouts/MainLayout'
import ProjectLayout from './Layouts/ProjectLayout'
import ServiceSpotDetails from './Component/Projects/ServiceSpotDetails'
import HobbyHubDetails from './Component/Projects/HobbyHubDetails'
import AppStoreDetails from './Component/Projects/AppStoreDetails'


const router = createBrowserRouter([
  {
    index:true,
    path: '/',
    element: <MainLayout/>
  },
  {
    path: '/project',
    Component: ProjectLayout,
    children:[
      {
        path:'/project/1',
        Component: ServiceSpotDetails,

      },
      {
        path:'/project/2',
        Component: HobbyHubDetails,
      },
      {
        path:'/project/3',
        Component: AppStoreDetails,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <RouterProvider router={router}/>

  </StrictMode>,
)
