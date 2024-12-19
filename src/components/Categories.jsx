import React from 'react'
import { Link } from 'react-router-dom'
import { category } from './API/category'
import { useDispatch } from 'react-redux'
import { setNav } from '../stores/navSlice'
function Categories({className}) {
  const dispatch = useDispatch()
  return (
    <>
      <div className={`flex overflow-x-auto whitespace-nowrap ${className}`}>
        {
          category.map((item) => {
            return ( 
              <div key={item.id} onClick={()=>dispatch(setNav(item.category))}>
              <Link className='text-[15px] px-[20px] py-[10px] hover:bg-slate-800 ' to='productView' >
                {item.title}
              </Link>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Categories