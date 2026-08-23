import React from 'react'
import hero from '../assets/hero.jpg'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'


function Home() {
  return (
    <>

     <main className="bg-background">

      <section style={{backgroundImage: ` linear-gradient(
      to right,rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.05)),
      url(${hero})`}}
      className='h-180  bg-cover bg-center px-5'>
      

      <div className="container text-white pt-40 ">
        <h1 className='title-text text-7xl'>
          <span className=''>Where</span>
          <span className='ml-5 text-secondary'>Heritage</span>
          <br/>
          <span className=''>Meets</span>
          <span className='ml-5 text-secondary'>Elegance</span>
        </h1>
         
        <p className=' mt-7 '>Discover jewelry inspired by Nepalese tradition,<br/>
         crafted to preserve our cultural heritage and celebrate<br/> timeless beauty.</p>
        
        <Button/>
      </div>
      </section>

      <div className='container py-10'>
        <p className='title-text text-center text-2xl'>Choose from our Best Picks</p>
        <hr className='mb-5 mx-auto border-secondary w-30'/>
        <ProductCard/>
      </div>

      <div className='container py-10'>
        <p className='title-text text-center text-2xl'>Explore Our Discounted Products</p>
        <hr className='mb-5 mx-auto border-secondary w-30'/>
        <ProductCard/>
      </div>

      <div className='contaiiner py-10'>
        <p className='title-text text-center text-2xl'>Why Choose Us ?</p>
        <hr className='mb-5 mx-auto border-secondary w-30'/>

        <div className='container flex justify-between gap-6 '>
          <div className='border rounded-br-3xl rounded-tl-3xl p-2 w-90'>
            <h1 className='text-2xl title-text'>Timeless Craftsmanship</h1>
            <hr className='mb-5 border-secondary w-30'/>
            <p className='text-sm'>Every piece is thoughtfully crafted with<br/> attention to detail, quality, and timeless design.</p>
          </div>
          <div className='border rounded-br-3xl rounded-tl-3xl p-2 w-90'>
            <h1 className='text-2xl title-text'>Premium Quality</h1>
            <hr className='mb-5 border-secondary w-30'/>
            <p className='text-sm'>We carefully select high-quality materials<br/> to ensure your jewelry looks beautiful and lasts for years.</p>
          </div>
          <div className='border rounded-br-3xl rounded-tl-3xl p-2 w-90'>
            <h1 className='text-2xl title-text'>Elegant Designs</h1>
            <hr className='mb-5 border-secondary w-30'/>
            <p className='text-sm'>From traditional pieces to modern styles,<br/> our collection is designed to complement every occasion.</p>
          </div>
          <div className='border rounded-br-3xl rounded-tl-3xl p-2 w-90'>
            <h1 className='text-2xl title-text'>Trusted Service</h1>
            <hr className='mb-5 border-secondary w-30'/>
            <p className='text-sm'>We believe in honest pricing, reliable<br/> service, and making every customer's experience special.</p>
          </div>
          {/* <div className='border rounded-br-3xl rounded-tl-3xl p-2'>
            <h1 className='text-2xl title-text'>Made for Every Occasion</h1>
            <hr className='mb-5 border-secondary w-30'/>
            <p className='text-sm'>Whether it's a wedding, celebration,<br/> gift, or everyday elegance, find <br/> a piece that makes every <br/> moment memorable.</p>
          </div> */}
        </div>
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
