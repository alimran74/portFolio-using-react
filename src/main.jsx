import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router'; 


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
      <Suspense fallback={<div>Loading Main Layout...</div>}>
        <MainLayout />
      </Suspense>
    ),
  },
  {
    path: '/project',
    element: (
      <Suspense fallback={<div>Loading Project Layout...</div>}>
        <ProjectLayout />
      </Suspense>
    ),
    children: [
      {
        path: '1', // relative path; no need for /project/1 here
        element: (
          <Suspense fallback={<div>Loading ServiceSpot Details...</div>}>
            <ServiceSpotDetails />
          </Suspense>
        ),
      },
      {
        path: '2',
        element: (
          <Suspense fallback={<div>Loading HobbyHub Details...</div>}>
            <HobbyHubDetails />
          </Suspense>
        ),
      },
      {
        path: '3',
        element: (
          <Suspense fallback={<div>Loading AppStore Details...</div>}>
            <AppStoreDetails />
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
