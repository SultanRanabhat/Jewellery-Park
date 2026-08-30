import React from 'react'
import {Eye , Heart} from 'lucide-react'
import ProductList from '../data/ProductList'
import { useNavigate } from 'react-router-dom'


function ProductCard() {

    const navigate = useNavigate();

    const handleViewDetails = (productId) =>{
        console.log("button viewdetailsclicked")
        navigate(`/product/${productId}`)
    }
    
  return (
    <>
    <div className='container text-center flex justify-between'>
    {ProductList.map((product)=>(
        <div key={product.id} className='border rounded-bl-3xl rounded-tr-3xl text-center p-3 shadow-lg shadow-black/50 bg-white '>
            <div className="w-50 h-50 relative">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover"/> 
            
                <div className='flex absolute top-0 left-0 right-0 justify-between '>
                    <button  className='border rounded-full p-2 bg-white/50' >
                        <Eye/>
                    </button>
                    <button className='border rounded-full p-2 bg-white/50'>
                        <Heart/>
                    </button>
                </div>
            </div>
                
            <br/>
            <div>
                <h1 className='title-text text-2xl'>{product.name}</h1>
                <hr className='mb-5 mx-auto border-secondary w-20'/>
                <p>Price: Nrs.{product.price}</p>
                <p>For: {product.gender}</p>
            </div>
            <div className='flex justify-between'>
            <button className='smallbuttons'>Buy Now</button>
            <button  onClick= {()=> handleViewDetails(product.id)} className='smallbuttons'>View Details</button>
            </div>
        </div>
        ))}
    </div>

    
    
    </>
  )
}

export default ProductCard
