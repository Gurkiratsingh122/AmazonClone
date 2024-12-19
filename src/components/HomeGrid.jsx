import React from 'react'
import cushion from '../assets/homeStyle/cushion.jpg'
import lighting from '../assets/homeStyle/lighting.jpg'
import storage from '../assets/homeStyle/storage.jpg'
import vases from '../assets/homeStyle/vases.jpg'
import appliance1 from '../assets/homeStyle/appliance1.jpg'
import appliance2 from '../assets/homeStyle/appliance2.jpg'
import appliance3 from '../assets/homeStyle/appliance3.jpg'
import appliance4 from '../assets/homeStyle/appliance4.jpg'
import brand4 from '../assets/homeStyle/brand4.jpg'
import brand1 from '../assets/homeStyle/brand1.jpg'
import brand2 from '../assets/homeStyle/brand2.jpg'
import brand3 from '../assets/homeStyle/brand3.jpg'
import bedsheet from '../assets/homeStyle/bedsheet.jpg'
import curtains from '../assets/homeStyle/curtains.jpg'
import iron from '../assets/homeStyle/iron.jpg'
import decor from '../assets/homeStyle/decor.jpg'
import carClean from '../assets/homeStyle/carClean.jpg'
import rim from '../assets/homeStyle/rim.jpg'
import helmet from '../assets/homeStyle/helmet.jpg'
import vacuum from '../assets/homeStyle/vaccum.jpg'
import women from '../assets/homeStyle/women.jpg'
import women2 from '../assets/homeStyle/women2.jpg'
import women3 from '../assets/homeStyle/women3.jpg'
import women4 from '../assets/homeStyle/women4.jpg'
import toy1 from '../assets/homeStyle/toy1.jpg'
import toy2 from '../assets/homeStyle/toy2.jpg'
import toy3 from '../assets/homeStyle/toy3.jpg'
import toy4 from '../assets/homeStyle/toy4.jpg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setNav } from '../stores/navSlice'

function HomeGrid() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const boxes = [{
        title: "Revamp your home in style",
        img1: `${cushion}`,
        category1: 'cushions',
        img2: `${lighting}`,
        img3: `${storage}`,
        img4: `${vases}`,
        des1: 'cushions, covers, bedsheets & more',
        des4: 'Figurines, vases & more',
        des2: 'Lighting Solutions',
        des3: 'Home Storage'
    },
    {
        title: "Starting ₹149 | Headphones",
        img1: `${brand1}`,
        img2: `${brand2}`,
        img3: `${brand3}`,
        img4: `${brand4}`,
        des1: 'Starting @249 | boAt',
        des2: 'Starting @249 | boult',
        des3: 'Starting @249 | noise',
        des4: 'Starting @249 | zebronics'
    },
    {
        title: 'Appliances for your home | Up to 55% off',
        img1: `${appliance1}`,
        img2: `${appliance2}`,
        img3: `${appliance3}`,
        img4: `${appliance4}`,
        des1: 'Air Conditioner',
        des2: 'Refrigerator',
        des3: 'Microwave',
        des4: 'Washing Machine'
    },
    {
        title: 'Starting ₹199 | Amazon Brands & more',
        img1: `${bedsheet}`,
        img2: `${curtains}`,
        img3: `${iron}`,
        img4: `${decor}`,
        des1: 'Starting @199 | Bedsheets',
        des2: 'Starting @249 | Curtains',
        des3: '40% off | Ironing board',
        des4: 'upto 60% off | Home decor'
    },
    {
        title: 'Starting ₹299 | Amazon Basics & more',
        img3: `${bedsheet}`,
        img4: `${curtains}`,
        img1: `${iron}`,
        img2: `${decor}`,
        des1: 'Starting @299 | Bedsheets',
        des2: 'Starting @249 | Curtains',
        des3: '40% off | Ironing board',
        des4: 'upto 60% off | Home decor'
    },
    {
        title: 'Automotive essentials | Up to 60% off',
        img1: `${carClean}`,
        img2: `${rim}`,
        img3: `${helmet}`,
        img4: `${vacuum}`,
        des1: 'Cleaning Accessories',
        des2: 'Tyre and rim care',
        des3: 'Helmets',
        des4: 'Vacuum cleaner'
    },
    {
        title: 'Up to 60% off | Styles specially for women',
        img1: `${women}`,
        img2: `${women2}`,
        img3: `${women3}`,
        img4: `${women4}`,
        des1: 'Women clothing',
        des2: 'Footwear + Handbags',
        des3: 'Watches',
        des4: 'Fashion jewellery'
    },
    {
        title: 'Min. 40% off | Fun toys & games | Amazon brands',
        img1: `${toy1}`,
        img2: `${toy2}`,
        img3: `${toy3}`,
        img4: `${toy4}`,
        des1: 'Minimum 40% off | Soft toys',
        des2: 'Minimum 40% off | Games ',
        des3: 'Minimum 40% off | Rides',
        des4: 'Minimum 40% off | Outdoor Games',
    },
    ]

   const handleImgClick1 = (nav)=>{
    dispatch(setNav(nav))

    navigate('/productView')
   }
    return (
        <>
            <div className='bg-slate-100'>



                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-1 w-full bg-slate-100">
                    {boxes.map((item) => {
                        return (
                            <div className='h-[420px] w-[350px] bg-white mx-3 my-3' key={item.des1} >
                                <div className=' text-[20px] mt-4 mx-3'><b>{item.title}</b></div>
                                <div className='grid grid-cols-2'>
                                    <img className='w-40 mt-4 mx-auto cursor-pointer' src={item.img1} onClick={()=>handleImgClick1(item.category1)}/>
                                    <img className='w-40 mt-4 mx-auto cursor-pointer' src={item.img2} />
                                    <div className='w-32 mb-0 mx-4 text-[14px]'>{item.des1}</div>
                                    <div className='w-32 mb-1 mx-4 text-[14px]'>{item.des2}</div>
                                    <img className='w-40 mt-4 mx-auto cursor-pointer' src={item.img3} />
                                    <img className='w-40 mt-4 mx-auto cursor-pointer' src={item.img4} />
                                    <div className='w-32 mb-1 mx-4 text-[14px]'>{item.des3}</div>
                                    <div className='w-32 mb-1 mx-4 text-[14px]'>{item.des4}</div>
                                </div>
                                <Link className='mx-3 text-blue-400 text-[12px]'>Explore More</Link>
                            </div>
                        )
                    })
                    }
                </div>
            </div>

        </>
    )
}

export default HomeGrid