import React from 'react'
import Root from './Components/Root'
import ErrorPage from './Error-Page'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewPosts from './Pages/NewPosts'
import AllPosts from './Pages/AllPosts'
import Home from './Pages/Home'
import Update from './Pages/Update'

const router = createBrowserRouter([
  {
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allPost",
        element: <AllPosts />,
      },
      {
        path: "/newPost",
        element: <NewPosts />,
      },
      {
        path: "/:id",
        element: <Update />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router}/>;
}

export default App