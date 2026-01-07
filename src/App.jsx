import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Shopcategory from './pages/Shopcategory'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Footer from './component/Footer/Footer'
import women from './assets/women.jpg'
import kid from "./assets/kid.jpg"
import men from "./assets/men.jpg"
function App() {
  return (
    <div>
    <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Shop />} />
    <Route path="/Mens" element={<Shopcategory banner={men} category="men" />} />
    <Route path="/Kid" element={<Shopcategory banner={kid} category="kid" />} />
    <Route path="/Women" element={<Shopcategory banner={women} category="women" />} />
    <Route path="/product" element={<Product/>}/>
    <Route path="/product/:productId" element={<Product/>}/>
    <Route path="/Cart" element={<Cart />} />
    <Route path="/Login" element={<Login />} />
  </Routes>
  <Footer />
</BrowserRouter>

    </div>
  )
}

export default App
