import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function yourOrders() {
    const orders = useSelector((state)=> state.order.ordersData)


  return (
    <>
    <div className="flex justify-center gap-6 p-6 mt-12">
          {orders.length > 0 ? (
            orders.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg p-4 w-72 flex flex-col items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-72 h-40 object-contain mb-1 cursor-pointer"
                />
                <hr className="w-full my-1" />
                <div className="flex flex-col flex-grow text-center">
                  <div className="text-lg font-semibold flex justify-center">
                    {item.title}
                  </div>
                  <div className="text-xl font-bold my-1">
                    <span>$</span>
                    {item.price}
                  </div>
                  
                </div>
              </div>
            ))
          ) : (
            <div className=''>
            <div className="text-gray-500 text-lg">Nothing To show Here Continue Shopping...</div>
            <Link to="/home">
            <button  className="w-full bg-[#FFC83D] text-white text-center py-2 mt-4 rounded-md hover:bg-yellow-600">home</button>
            </Link>
            </div>
          )}
        </div>
    </>
  )
}

export default yourOrders