import React from 'react'
import hero from '../assets/hero.jpg'
import ProductCard from '../components/ProductCard'
import WhyChooseUs from '../components/WhyChooseUs'


function Home() {
  
  return (
    <>

     <main className="bg-background">

      <section style={{backgroundImage: ` linear-gradient(
      to right,rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.05)),
      url(${hero})`}}
      className='h-160  bg-cover bg-center px-5'>
      

      <div className="container text-white pt-40 ">
        <h1 className='title-text text-7xl'>
          <span className=''>Where</span>
          <span className='ml-5 text-secondary'>Heritage</span>
          <br/>
          <span className=''>Meets</span>
          <span className='ml-5 text-secondary'>Elegance</span>
        </h1>
         
        <p className=' mt-7 text-[12px] '>Discover jewelry inspired by Nepalese tradition,<br/>
         crafted to preserve our cultural heritage and celebrate<br/> timeless beauty.</p>
        
        <button className='buttons'>Explore</button>
      </div>
      </section>

      {/* Best product section */}

      <div className='container py-10'>
        <p className='title-text text-center text-2xl'>Choose from our Best Picks</p>
        <hr className='mb-5 mx-auto border-secondary w-30'/>
        <ProductCard/>
      </div>

      {/* Discounted Product Section */}

      <div className='container py-10'>
        <p className='title-text text-center text-2xl'>Explore Our Discounted Products</p>
        <hr className='mb-5 mx-auto border-secondary w-30'/>
        <ProductCard/>
      </div>

      {/* Why choose us section */}

      <div className='contaiiner py-10'>
        <p className='title-text text-center text-2xl'>Why Choose Us ?</p>
        <hr className='mb-5 mx-auto border-secondary w-30'/>
        <WhyChooseUs/>
      </div>

      <div className='container py-10'>
        <p className='title-text text-center text-2xl'>Subscribe Our NewLetter</p>
        <hr className='mb-5 mx-auto border-secondary w-30'/>
        
      </div>

      </main>
    </>
  )
}

export default Home
