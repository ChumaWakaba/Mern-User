import React from 'react'
import Root from './Components/Root'
import ErrorPage from './Error-Page'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
])

const App = () => {
  return (
    <div className='bg-orange-600 py-4'>App</div>
  )
}

export default App