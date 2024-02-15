import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRoutes } from './routes'
import { UserProvider } from './context/user'

import 'react-toastify/dist/ReactToastify.css'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRoutes />
    </UserProvider>
  </React.StrictMode>
)
