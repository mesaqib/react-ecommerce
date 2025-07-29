import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import AllProducts from '../pages/AllProducts'
import Category from '../pages/Category'
import About from '../pages/About'
import Cart from '../pages/Cart'
import NotFound from '../pages/NotFound'
import Contact from '../pages/Contact'
import SingleProduct from '../pages/SingleProduct'

const AppRoutes = () => {

  return (
         <>
         <Routes>
            <Route element={<MainLayout/>}>
                <Route path='/' element={<Home/>}  />
                <Route path='/all-products' element={<AllProducts/>} />
                <Route path='/all-products/:id' element={<SingleProduct/>} />
                <Route path='/category/:slug'  element={<Category/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/contact' element={<Contact/>} />
            </Route>

            <Route path="*" element={<NotFound />} />
         </Routes>
         </>     
  )
}

export default AppRoutes
