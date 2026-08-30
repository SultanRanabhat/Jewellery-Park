import React from 'react'
import ChooseData from '../data/ChooseData'

function WhyChooseUs() {

  return (
    <>
    <div className='container grid grid-cols-4 gap-4'>
    {ChooseData.map((item)=>(
        <div key={item.id} className='border rounded-br-3xl rounded-tl-3xl p-2'>
            <p className='text-[22px] title-text'>{item.title}</p>
            <hr className='mb-5 border-secondary w-30'/>
            <p className='text-[12px]'>{item.discription}</p>
        </div>
    )
    
    )}
    
    </div>    
    
    </>
  )
}

export default WhyChooseUs
