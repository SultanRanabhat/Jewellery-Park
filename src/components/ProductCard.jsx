import React from 'react'
import jhumka from '../assets/jhumka.webp'
import ring from '../assets/ring.jpg'
import neckless from '../assets/neckless.avif'
import pauju from '../assets/pauju.webp'
import {Eye , Heart} from 'lucide-react'


function ProductCard() {

    const productlist=[
        {
            id: 1,
            name: "Neckless",
            type: "Gold",
            price:"100000",
            gender: "Women",
            img: neckless,
        },
        {
            id: 2,
            name: "Jhumka",
            type: "Gold",
            price:"100000",
            gender: "Women",
            img: jhumka,
        },
        {
            id: 3,
            name: "Pauju",
            type: "Gold",
            price:"100000",
            gender: "Women",
            img: pauju,
        },
        {
            id: 4,
            name: "Ring",
            type: "Gold",
            price:"100000",
            gender: "Men",
            img: ring,
        },
    ]

    
  return (
    <>
    <div className='container text-center flex justify-between'>
    {productlist.map((product)=>(
        <div key={product.id} className='border rounded-bl-3xl rounded-tr-3xl text-center p-3 shadow-lg shadow-black/50 bg-white '>
            <div className="w-50 h-50 relative">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover"/> 
            
                <div className='flex absolute top-0 left-0 right-0 justify-between '>
                    <button className='border rounded-full p-2 bg-white/50' >
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
        </div>
        ))}
    </div>

    
    
    </>
  )
}

export default ProductCard
