import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity,removeFromCart,grandTotal } from "../stores/cartSlice";
import { Link } from 'react-router-dom';
import { productDetails } from '../stores/productDetail';
import { setNav } from '../stores/navSlice';
import { useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth';
function Cart() {
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();
  const navigate = useNavigate()

 const subtotal = cartData.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
   

  useEffect(()=>{
    dispatch(grandTotal(subtotal))
  })

  const handleQuantityChange = (id, value) => {
    dispatch(updateQuantity({ id, quantity: Math.max(1, value) }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleClick = (product)=> {
    dispatch(productDetails(product));
    dispatch(setNav(product.category))
    // console.log(showCategory)
    navigate('/productDetails')  }

    const handleProceed = async () => {
      try {
        const user = await authService.getCurrentUser();
        if (user) {
          navigate('/checkout');
        } 
      } catch (error) {
          navigate('/login'); 
        
      }
    };
    
  return (
    <div className="flex flex-col lg:flex-row bg-slate-100 p-6">
      {/* Cart Items Section */}
      <div className="bg-white lg:w-3/4 w-full rounded-lg shadow-md mx-auto lg:mx-6 p-6">
        <div className="text-2xl font-semibold mb-4 border-b pb-2">
          Shopping Cart
        </div>

        {cartData.length !== 0 ? (
          <div className="space-y-6"> 
            {cartData.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-gray-50 p-4 rounded-md shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  onClick={()=>handleClick(item)}
                  className="w-28 h-28 object-contain rounded-md cursor-pointer"
                />

                <div className="flex flex-col flex-grow">
                  <div className="text-lg font-medium">{item.title}</div>
                  <div className="text-green-500 text-sm">In Stock</div>
                  <div className="text-gray-500 text-sm">Eligible for Shipping</div>
                  <div className="mt-2 flex items-center">
                    <label className="text-sm font-medium mr-2">Qty:</label>
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className="w-16 border rounded-md px-2 py-1 text-center border-gray-300 focus:outline-none focus:ring focus:ring-yellow-300"
                    />
                    <button className="text-red-500 text-sm ml-4 hover:underline" onClick={()=>handleRemoveItem(item.id)}>
                      Delete
                    </button>
                  </div>
                </div>
                <div className="text-lg font-bold text-gray-800">
                  ${(item.quantity * item.price).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-xl text-gray-500 py-12">
            No items to show here
          </div>
        )}
      </div>

      <div className="bg-white lg:w-1/4 w-full rounded-lg shadow-md mx-auto lg:mx-6 p-6 mt-6 lg:mt-0">
        <div className="text-lg font-semibold mb-4">Order Summary</div>
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Subtotal</span>
          <span>
            $
            {subtotal
            }
          </span>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>
            $
            {subtotal}
          </span>
        </div>
        <div className="w-full bg-[#FFC83D] text-white text-center py-2 mt-4 rounded-md hover:bg-yellow-600">
          {cartData.length !=0 ?
         <div onClick={handleProceed} className='px-[90px] py-2 cursor-pointer'>Proceed to Buy</div> :
         <Link to='/home' className='px-[125px] py-2'>Shop</Link> 
           
          }
        </div>
      </div>
    </div>
  );
}

export default Cart;
