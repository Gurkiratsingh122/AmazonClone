import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './stores/authSlice'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
 const [displayBtn, setDisplayBtn] = useState('')
 const dispatch = useDispatch()
 const cartData = useSelector((state)=> state.cart.cartData)
  const navigate = useNavigate()
 useEffect(()=>{
      authService.getCurrentUser().then((userdata)=>{
      if(userdata){
            dispatch(login({userdata}))
      }else{
        dispatch(logout())
      }
    }
      ) 
 },[])

 const handleCartBtn = () => {
  navigate('/cart')
  setDisplayBtn('hidden')
 }

 return (
  
   <>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4">
        <Outlet/>
      </main>
      {cartData.length !==0 && (
        <div
        className={`text-2xl fixed bottom-10 px-5 py-2 rounded-full left-[50%] translate-x-[-50%] hover:border-black bg-[#fac338] text-white font-semibold cursor-pointer shadow-lg hover:shadow-2xl hover:bg-yellow-600 hover:scale-110  transition-all duration-300 ease-in-out border-2 border-gray-600 ${
          window.location.href.includes('/cart')|| window.location.href.includes('/checkout') ? displayBtn : ''
        }`}
        onClick={handleCartBtn}
      >
        <span className="animate-move">{`Go To Cart >`}</span>
      </div>)}
      <Footer />
    </div>
    </>
 )
  
}

export default App
