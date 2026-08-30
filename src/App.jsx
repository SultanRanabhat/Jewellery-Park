import React from 'react'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import Layout from './layout/Layout'
import { Routes ,Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path='about' element={<AboutUs/>}/>
        <Route path='contact' element={<ContactUs/>}/>
        <Route path='/product/:id' element={< ProductDetails/>}/> 
      </Route>
    </Routes>
    
    </>
  )
}

export default App
