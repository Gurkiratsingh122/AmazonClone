import React, { useState, useEffect } from 'react'
import AddToCartBtn from "./AddToCartBtn";
import filterIcon from '../../assets/filter.png'
import { useDispatch, useSelector } from 'react-redux';
import { productDetails } from '../../stores/productDetail';
import { useNavigate } from 'react-router-dom';
import { products } from '../API/products';
import { setNav } from '../../stores/navSlice';

function ProductView() {

  // const [filter, setFilter] = useState(productCategory);
  const [filterState, setFilterState] = useState(false);
  const [showCategory, setShowCategory] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const sortedLowToHigh = [...productCategory].sort((a, b) => a.price - b.price)
  // const sortedHighToLow = [...productCategory].sort((a, b) => b.price - a.price)

    const ProductCategory = useSelector((state=> state.nav.category))

    useEffect(() => {
      ProductCategory=='all' ?
      setShowCategory(products)
      :
            setShowCategory(products.filter((item) => item.category === ProductCategory))

      
    }, [ProductCategory]);

  const sortedLowToHigh = [...showCategory].sort((a, b) => a.price - b.price)
  const sortedHighToLow = [...showCategory].sort((a, b) => b.price - a.price)
  const sortrating = [...showCategory].sort((a, b) => b.rating.rate - a.rating.rate)
  
  
  const category = [
    {
      title: 'Low To High',
      onClick: () => setShowCategory(sortedLowToHigh)
    },
    {
      title: 'High To Low',
      onClick: () => setShowCategory(sortedHighToLow)
    },
    {
      title: 'Best Rated',
      onClick: () => setShowCategory(sortrating)
    },
  ]

  const handleDetails = (product) => {
    dispatch(productDetails(product));
    dispatch(setNav(product.category))
    // console.log(showCategory)
    navigate('/productDetails')
        window.scrollTo(0, 0);

  };

  return (
    <>
      <div className='bg-slate-100'>
        {/* <div className='flex '>
          <div className='text-xl'>filter</div>
          <button onClick={() => setFilter(sortedLowToHigh)}>Low To High</button>
          <button onClick={() => setFilter(sortedHighToLow)}>High To Low</button>
        </div> */}

<div className="relative" onMouseLeave={() => setFilterState(false)}>
              <div
                className={` w-[120px] text-white h-10 flex bg-black items-center px-3 cursor-pointer ${filterState ? "rounded-t-lg" : 'rounded-lg '}`}
                onClick={() => setFilterState((prev) => !prev)}
              >
                <div className='mx-3 flex'>
                Filter
                <img src={filterIcon} className='w-4 mt-1 h-4 text-center mx-2'/>
              </div>
              </div>
              {filterState && (
                <div className="absolute bg-white mt-0 w-[120px] rounded-b-lg shadow-md z-10 max-h-72 overflow-y-auto scrollbar-hidden">
                  {category.map((item, index) => (
                    <div  key={index} className='hover:bg-gray-200 text-black cursor-pointer'onClick={item.onClick}>
                      <div
                        className="block px-4 py-2"
                      >
                        {item.title}
                      </div>
                      <hr></hr>
                    </div>
                  ))}
                </div>
              )}
            </div>

        <div className="flex flex-wrap justify-center gap-6 p-6 -mt-12">
          {showCategory.length > 0 ? (
            showCategory.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg p-4 w-72 flex flex-col items-center hover:scale-105 transition-transform duration-200 ease-in-out"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  onClick={()=>handleDetails(item)}
                  className="w-72 h-40 object-contain mb-1 cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
                />
                <hr className="w-full my-1" />
                <div className="flex flex-col flex-grow text-center">
                  <div className="text-lg font-semibold flex justify-center">
                    {item.title}
                  </div>
                  <div className="text-green-500 text-sm mt-1">In Stock</div>
                  <div className="text-xl font-bold my-1">
                    <span>$</span>
                    {item.price}
                  </div>
                  <div className="text-[#FFC83D] flex items-center justify-center text-sm">
                    ★ {item.rating.rate}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {item.rating.count} Reviews
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Eligible for Shipping
                  </div>
                </div>
                <AddToCartBtn item={item} />
                {/* <button onClick={()=>handleDetails(item)} className='hover:bg-[#131921] text-white py-2 px-3 rounded-lg bg-slate-600 focus:outline-none mt-1'>View Product</button> */}
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-lg">Loading products...</div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductView