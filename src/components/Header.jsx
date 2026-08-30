import React from 'react'
import { NavLink } from 'react-router-dom'
import {CircleUser , ShoppingCart} from "lucide-react"


function Header() {

  const navbar=[
    {
      name:"Home",
      path:"/"

    },
    {
      name:"AboutUs",
      path:"/about"

    },
    {
      name:"ContactUs",
      path:"/contact"

    },

  ]



  return (
    <>
    
    <header className='p-5 bg-primary text-white text-[12px]'>
      <div className='container flex items-center justify-between' >

        <a href='/'><img src='' alt='headerLogo'/></a>

        <nav className='flex items-center gap-8 text-[12px]'>
          {navbar.map((item)=>
          <NavLink 
          key={item.name}
          to={item.path} >{item.name}</NavLink>
          )}
        </nav>

        <div className='flex gap-5'>
        <a href='/loginSignup'><CircleUser/></a>
        <a href='/cart'><ShoppingCart /></a>
        </div>


      </div>


    </header>
    
    </>
  )
}

export default Header
