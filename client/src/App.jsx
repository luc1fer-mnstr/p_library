import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/login/Login'
import Register from './components/register/Register'
import NavLayout from './components/main/NavLayout'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/main/home/Home'
import About from './components/main/about/About'
import Feedback from './components/main/feedback/Feedback'
import Books from './components/main/books/Books'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login /></div>
  },
  {
    path: '/register',
    element: <div><Register /></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard /></div>
  },
  {
    path: '/home',
    element: <NavLayout />,
    children: [
      {
        index: true, element: <Home/>
      },
      {
        path:'about', element: <About/>
      },
      {
        path:'feedback', element: <Feedback/>
      },
      {
        path:'books', element: <Books/>
      },
    ]
  },
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
