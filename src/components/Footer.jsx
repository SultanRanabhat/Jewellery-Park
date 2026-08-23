import React from 'react'
import { FaFacebook , FaInstagram } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

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

    <footer className='p-5 bg-primary text-white'>
      <div className='container flex justify-between'>
        <div className='flex flex-col gap-5'>
          <img src='' alt='footerLogo'/>
          <p>----------<br/>Jwelens Slogan Here<br/>----------</p>
          <div className='flex row gap-5'>
            <FaFacebook/>
            <FaInstagram/>
          </div>
        </div>

        <nav className='flex flex-col gap-5'>
          {footernav.map((items)=>
          <NavLink
          key={items.name}
          to={items.path}>{items.name}</NavLink>
          )}
        </nav>

        <nav className='flex flex-col gap-5'>
          {secondfooternav.map((items)=>
          <NavLink
          key={items.name}
          to={items.path}>{items.name}</NavLink>
          )}
        </nav>

        <nav className='flex flex-col gap-5'>
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
