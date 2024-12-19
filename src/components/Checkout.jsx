import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import authservice from '../appwrite/config';
import authService from '../appwrite/auth';
import { clearCart } from '../stores/cartSlice';
import { orderResults } from '../stores/ordersSlice';

function Checkout() {
  const [paymentMode, setPaymentMode] = useState('');
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();
  const [bedispachedTitle, setbedispachedTitle] = useState('');
  const [bedispachedQuantity, setbedispachedQuantity] = useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (cartData.length > 0) {
      const titles = cartData.map((item) => item.title).join(', ');
      setbedispachedTitle(titles);
      const quantity = cartData.map((item) => item.quantity).join(', ');
      setbedispachedQuantity(quantity);
    }
  }, [cartData]);

  useEffect(() => {
    const fetchUserName = async () => {
      const name = await authService.getUserName();
      setUserName(name);
    };
    fetchUserName();
  }, []);

  const post = async (data) => {
    try {
      const posted = await authservice.createPost({
        Address: data.Address,
        payment: totalPrice,
        name: userName,
        Title: bedispachedTitle,
        quantity: bedispachedQuantity,
      });
      if (posted) {
        dispatch(orderResults(cartData));
        navigate('/orderPlaced');
        dispatch(clearCart());
      }
    } catch (error) {
      console.error('Error placing order:', error);
      setError('submit', { message: 'Failed to place order. Try again.' });
    }
  };

  return (
    <>
      <div className="w-full flex justify-between bg-[#0F1111] text-white p-4">
        <div className="text-4xl">Checkout</div>
        <div className="text-2xl">${totalPrice}</div>
      </div>

      <div className="flex flex-col lg:flex-row bg-slate-100 p-6 gap-6">
        {/* Order Items Section */}
        <div className="bg-white lg:w-3/4 w-full rounded-lg shadow-md p-6">
          {cartData.length > 0 ? (
            <div className="grid md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 gap-4 bg-white p-4">
              {cartData.map((item) => (
                <div
                  className="border-l-2 border-slate-500 p-2 flex flex-col px-10 pt-5"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[150px] h-[150px] object-fit"
                  />
                  <div className="text-sm font-medium mt-2 w-[150px]">
                    {item.title}
                  </div>
                  <div className="mt-2 text-sm font-bold">
                    Quantity: {item.quantity}
                  </div>
                  <div className="mt-2 text-sm font-bold">
                    To Pay: ${(item.quantity * item.price).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="col-span-4 my-auto text-center text-3xl opacity-60">
              Nothing to show here...
            </div>
          )}
        </div>

        {/* Summary and Form Section */}
        <div className="bg-white lg:w-1/4 w-full rounded-lg shadow-md p-6">
          <div className="text-lg font-semibold mb-4">Order Summary</div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Subtotal</span>
            <span>${totalPrice}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <hr className="my-2" />
          <form onSubmit={handleSubmit(post)}>
            <div className="mb-4">
              <label className="text-sm font-medium">Delivery Address</label>
              <textarea
                className={`w-full p-2 border rounded mt-2 ${
                  errors.Address ? 'border-red-500' : ''
                }`}
                placeholder="Enter your delivery address"
                {...register('Address', { required: 'Address is required' })}
              ></textarea>
              {errors.Address && (
                <span className="text-red-500 text-sm">
                  {errors.Address.message}
                </span>
              )}
            </div>
            {errors.submit && (
              <span className="text-red-500 text-sm">{errors.submit.message}</span>
            )}
            <button
              className="w-full bg-[#FFC83D] text-white text-center py-2 mt-4 rounded-md hover:bg-yellow-600"
              type="submit"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Checkout;
