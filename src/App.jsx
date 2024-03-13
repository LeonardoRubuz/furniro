import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Shop from './pages/shop'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import Contact from './pages/contact'
import Layout from './pages/layout'
import Product from './pages/product'

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
        path : "boutique",
        element : <Shop />
      },
      {
        path : "boutique/produit",
        element : <Product />
      },
      {
        path : "panier",
        element : <Cart />
      },
      {
        path : "paiement",
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
