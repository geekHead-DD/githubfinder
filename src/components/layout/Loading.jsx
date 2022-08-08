import React from 'react'
import cheems from '../assets/cheems.gif'

function Loading() {
  return (
      <div className='w-100 mt-20'>
        <img 
            src={cheems} 
            alt="Loading..."
            width={200}
            className="text-center mx-auto"    
        />   
      </div>
        )
}

export default Loading