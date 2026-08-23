import React from 'react'
import { NavLink } from 'react-router-dom'
import {CircleUser} from "lucide-react"


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
    
    <header className='p-5 bg-primary text-white'>
      <div className='container flex items-center justify-between' >

        <a href='/'><img src='' alt='headerLogo'/></a>

        <nav className='flex items-center gap-8'>
          {navbar.map((item)=>
          <NavLink 
          key={item.name}
          to={item.path} >{item.name}</NavLink>
          )}
        </nav>

        
        <a href='/loginSignup'><CircleUser/></a>


      </div>


    </header>
    
    </>
  )
}

export default Header
