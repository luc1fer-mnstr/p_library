import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/login/Login'
import Register from './components/register/Register'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import from main
import NavLayout from './components/main/NavLayout'
import Home from './components/main/home/Home'
import About from './components/main/about/About'
import Feedback from './components/main/feedback/Feedback'
import Books from './components/main/books/Books'

// import from dashboar
import BookList from './components/dashboard/components/books/bookList/BookList'
import Body from './components/dashboard/components/body/Body'
import AddBook from './components/dashboard/components/books/addBook/AddBook'

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
    element: <Dashboard />,
    children: [
      {
        index: true, element: <Body/>
      },
      {
        path:'book-list', element: <BookList/>
      },
      {
        path:'add-book', element: <AddBook/>
      },
    ]
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
