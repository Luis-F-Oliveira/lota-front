import { ToastContainer } from "react-toastify"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrivateRoute } from "./private"

import { Home, Login, ErrorPage } from "./pages"

export const BrowserRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer closeOnClick />
    </>
  )
}
