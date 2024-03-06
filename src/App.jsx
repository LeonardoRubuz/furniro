import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Shop from './pages/shop'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import Contact from './pages/contact'
import Layout from './pages/layout'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "",
        element : <Home />
      },
      {
        path : "shop",
        element : <Shop />
      },
      {
        path : "cart",
        element : <Cart />
      },
      {
        path : "checkout",
        element : <Checkout />
      },
      {
        path : "contact",
        element : <Contact />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
