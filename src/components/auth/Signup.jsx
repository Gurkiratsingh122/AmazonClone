import React, { useState } from 'react'
import authservice from '../../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../stores/authSlice'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState('')

  const create = async (data) => {
    setError('')
    try {
      const userData = await authservice.createAccount(data)
      if (userData) {
        // const userData = await authservice.getCurrentUser()
        if (userData) dispatch(login(userData))
        navigate('/home')
      } 
    } catch (error) {
      throw error
    }
  }
  return (
    <div className="flex items-center justify-center">
      <div className={`mx-auto w-full max-w-lg shadow-lg text-white rounded-xl p-10 border bg-[#131921]`}>
        <div className="mb-2 flex justify-center">
          {/* <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span> */}
        </div>
        <h2 className="text-center text-2xl font-bold text-[#FFC83D] ">Sign up to create account</h2>
        <p className="my-2 text-center text-base">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline text-[#FFC83D] "
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className='space-y-5'>
            <input
              label="Full Name: "
              placeholder="Enter your full name"
              className=' px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
              {...register("name", {
                required: true,
              })}
            />
            <input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              className=' px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }
              })}
            />
            <input
              // label="Password: "
              type="password"
              placeholder="Enter your password"
              className=' px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
              {...register("password", {
                required: true,
              })}
            />
            <button type="submit"
                className="  px-3 py-2 rounded-lg text-white bg-[#FFC83D] hover:bg-yellow-600 outline-none w-full">
                Create Account
            </button>
          </div>
        </form>
      </div>

    </div>)
}

export default Signup