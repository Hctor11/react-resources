import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AboutPage from './components/AboutPage.tsx'
import ErrorPage from './components/ErrorPage.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: '/categories',
    element: < AboutPage/>
    
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
