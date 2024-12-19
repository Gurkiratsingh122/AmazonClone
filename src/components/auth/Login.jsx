import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../../stores/authSlice'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState('')

    const login = async(data) => {
        setError("")
        try {
            const session = await authservice.login(data)
            if(session){
                const userData = await authservice.getCurrentUser()
            
            if(userData) dispatch(authLogin(userData))
                navigate("/Home")
        }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg shadow-md text-white rounded-xl p-10 border border-black/10 bg-[#131921]`}>
        {/* <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div> */}
        <h2 className="text-center text-2xl font-bold text-[#FFC83D] ">Sign in to your account</h2>
        <p className="mt-2 text-center text-base ">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline text-[#FFC83D]"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
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
                label="Password: "
                type="password"
                placeholder="Enter your password"
                className=' px-3 py-2 rounded-lg bg-white text-black outline-none duration-200 border border-gray-200 w-full'
                {...register("password", {
                    required: true,
                })}
                />
                <button
                type="submit"
                className="  px-3 py-2 rounded-lg text-white bg-[#FFC83D] hover:bg-yellow-600 outline-none  w-full"
                >Sign in</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login