import React from 'react'
import { FaFacebook , FaInstagram } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import footerLogo from '../assets/footerLogo.png'

function Footer() {
const footernav=[
  {
    name:"AboutUs",
    path:"/about",
  },
  {
    name:"ContactUs",
    path:"/contact",
  },
  {
    name:"Login/Signup",
    path:"/login-signup",
  },
]

const secondfooternav=[
  {
    name:"Terms & Conditions",
    path:"/terms-&-conditions",
  },
  {
    name:"Subscribe",
    path:"/subscribe",
  },
  {
    name:"FAQ",
    path:"/faq",
  },
]

const footercontactnav=[
  {
    name:"address",
    value:"Kathmandu, Nepal",
    path:"/contact",
  },
  {
    name:"phone",
    value:"01-7777777",
    path:"/",
  },
  {
    name:"email",
    value:"example@gmail.com",
    path:"/",
  },
  {
    name:"opening",
    value:"Sun-Fri, 10am-8pm",
    path:"/contact",
  },
]



  return (
    <>

    <footer className='p-5 bg-primary text-white text-[10px]'>
      <div className='container flex justify-between'>
        <div className='flex flex-col gap-2'>
          <img src={footerLogo} alt='footerLogo' className='h-20 w-30'/>
          <p className='w-50'>Discover jewelry inspired by Nepalese tradition,
          crafted to preserve our cultural heritage and celebrate
          timeless beauty.</p>
          <div className='flex row gap-2'>
            <FaFacebook/>
            <FaInstagram/>
          </div>
        </div>

        <nav className='flex flex-col gap-2 text-[10px]'>
          {footernav.map((items)=>
          <NavLink
          key={items.name}
          to={items.path}>{items.name}</NavLink>
          )}
        </nav>

        <nav className='flex flex-col gap-2 text-[10px]'>
          {secondfooternav.map((items)=>
          <NavLink
          key={items.name}
          to={items.path}>{items.name}</NavLink>
          )}
        </nav>

        <nav className='flex flex-col gap-2 text-[10px]'>
          {footercontactnav.map((items)=>
          <NavLink
          key={items.name}
          to={items.path}>{items.value}</NavLink>
          )}
        </nav>


      </div>

    </footer>
    
    </>
  )
}

export default Footer
