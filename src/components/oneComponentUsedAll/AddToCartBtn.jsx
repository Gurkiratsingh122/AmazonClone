import React from 'react'
import { useDispatch } from "react-redux";
import { AddToCart } from "../../stores/cartSlice";

function AddToCartBtn({item}) {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
      dispatch(AddToCart(product)); 
    };

  return (
    <div>
        <button
              className="bg-[#FFC83D] text-white py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none mt-2"
              onClick={() => handleAddToCart(item)} 
            >
              Add to Cart
            </button>
    </div>
  )
}

export default AddToCartBtn