import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AboutPage from './components/AboutPage.tsx'
import ErrorPage from './components/ErrorPage.tsx'
import CategoriesPage from './components/CategoriesPage.tsx'
import ComponentsPage from './components/ComponentsPage.tsx'
import ThreeDToolsPage from './components/ThreeDToolsPage.tsx'
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
    element: < CategoriesPage/>

  },
  {
    path: '/components',
    element: < ComponentsPage/>,
  },
  {
    path: '/tools',
    element: < ThreeDToolsPage/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
