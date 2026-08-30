import React from 'react'
import ProductList from '../data/ProductList'
import { useParams } from 'react-router-dom'

function ProductDetails() {

    const {id}=useParams()
    const product = ProductList.find((product) => product.id === parseInt(id))

  return (
    <>
  
    <div className=' bg-background'>
      <div className='container flex row py-5 gap-20'>
      <div className=''>
        <img src={product.img} alt={product.name} className='h-100 w-85 object-cover border rounded-bl-3xl rounded-tr-3xl shadow-lg shadow-black/50'/>
      </div>
      <div className='py-10' >
        <h1 className='text-4xl'>{product.name}</h1>
        <hr className='mb-5 border-secondary w-30'/>
        <p>Price : {product.price}</p>
        <p>Type : {product.type}</p>
        <p>For : {product.gender}</p>
        <br/>
        <p >Description : </p>
        <p className='w-100 '>{product.description}</p>
        <button className='smallbuttons'>Buy Now</button>
    <button className='smallbuttons ml-5'>Add to Cart</button>
    </div>
    
    </div>
    </div>
    
    </>
  )
}

export default ProductDetails
