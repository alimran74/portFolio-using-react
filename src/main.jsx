import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router'; 
import AuraMatchDetails from './Component/Projects/AuraMatchDetails';
import Loading from './Component/loading/Loading';
import ProjectLoading from './Component/loading/ProjectLoading';


const MainLayout = lazy(() => import('./Layouts/MainLayout'));
const ProjectLayout = lazy(() => import('./Layouts/ProjectLayout'));

const ServiceSpotDetails = lazy(() => import('./Component/Projects/ServiceSpotDetails'));
const HobbyHubDetails = lazy(() => import('./Component/Projects/HobbyHubDetails'));
const AppStoreDetails = lazy(() => import('./Component/Projects/AppStoreDetails'));

const router = createBrowserRouter([
  {
    index: true,
    path: '/',
    element: (
      <Suspense fallback={<div><Loading/></div>}>
        <MainLayout />
      </Suspense>
    ),
  },
  {
    path: '/project',
    element: (
      <Suspense fallback={<div><ProjectLoading/></div>}>
        <ProjectLayout />
      </Suspense>
    ),
    children: [
      {
        path: '1', // relative path; no need for /project/1 here
        element: (
          <Suspense fallback={<div><ProjectLoading/></div>}>
            <ServiceSpotDetails />
          </Suspense>
        ),
      },
      {
        path: '2',
        element: (
          <Suspense fallback={<div><ProjectLoading/></div>}>
            <HobbyHubDetails />
          </Suspense>
        ),
      },
      {
        path: '3',
        element: (
          <Suspense fallback={<div><ProjectLoading/></div>}>
            <AppStoreDetails />
          </Suspense>
        ),
      },
      {
        path: '4',
        element: (
          <Suspense fallback={<div><ProjectLoading/></div>}>
            <AuraMatchDetails/>
          </Suspense>
        ),
      },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
