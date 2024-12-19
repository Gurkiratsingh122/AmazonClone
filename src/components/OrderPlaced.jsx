import React from 'react'
import ordered from '../assets/orderPlaced.png'
import {Link} from 'react-router-dom'
function OrderPlaced() {
  return (
    <>
      <iframe
        className="w-[1280px] h-[400px] rounded-xl mx-auto"
        src='https://lottie.host/embed/492dda62-1c7f-4c54-93c1-17449ea8301a/JJPDtaYzg9.lottie'
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />  
      <div>
      <Link to={'/home'} className='px-20 py-3 rounded-lg flex justify-center text-white w-80 mx-auto bg-green-500'>Go To Home</Link>
      </div>  
    </>
  )
}

export default OrderPlaced