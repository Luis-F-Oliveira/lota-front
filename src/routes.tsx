import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage, Login } from './pages'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div><h1>Home</h1></div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  }
])