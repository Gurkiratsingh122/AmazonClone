import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import amazonLogo from '../assets/amazon_logo.png'
import location from '../assets/location.png'
import search from '../assets/search.png'
import hamburger from '../assets/hamburger.png'
import cart from '../assets/cart.png'
import Categories from "./Categories";
import { category } from "./API/category";
import { products } from "./API/products";
import { logout } from '../stores/authSlice'
import authService from "../appwrite/auth";
import { productDetails } from "../stores/productDetail";
import { setNav } from "../stores/navSlice";
const Header = () => {
  const [input, setinput] = useState('')
  const [filteredResults, setFilteredResults] = useState([]);
  const [categoriesState, setCategoriesState] = useState(false);
  const [userName, setUserName] = useState()
  const [arr, setarr] = useState([])

  useEffect(()=>{
    const fetchUserName = async ()=> {
      const name = await authService.getUserName()
      setUserName(name.split(' ')[0])

    }
    fetchUserName()
  })

  const cartData = useSelector((state) => state.cart.cartData);
  const authStatus = useSelector(state => state.auth.status);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      if (input) {
        const results = products.filter((item) =>
          item.title.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredResults(results);
      }
      if (!input) {
        setFilteredResults([])
      }

    }, 300);


  }, [input])

  const handleSearch = (product) => {

    // const foundProduct = products.find((item) => item.title === product.title);
    //   if(products.find((item) => item.title === product.title)){
    dispatch(productDetails(product))
    dispatch(setNav(product.category))
    navigate('/productDetails')
    setinput('')
      // }
      // else{
      //   // dispatch(ProductView(filteredResults))
      //   dispatch(setNav(filteredResults[0].category))
      //   navigate('/productView')
      //   setinput('else')

      // }
  }

  const handleCategory = (categoryClicked) => {
    dispatch(setNav(categoryClicked))
    navigate('/productView')
  }

  const logOutHandler = () => {
    authService.logOut().then(() => {
      dispatch(logout())
    })
  }

  return (
    <>
      <header className="bg-[#131921] h-14 text-white flex justify-between ">
        <div className="container flex items-center p-2">
          <Link to='/home' className="text-[30px] font-semibold font-serif text-[#FFC83D]">
          {/* QuickDispatch */}
           <img src={amazonLogo} className="h-10" /> 
            
          </Link>
          <img src={location} className="h-10 ml-6" />
          <div className="text-base">Delivering to Srinagar <br></br>160001</div>

          <div className="h-10 bg-white flex mx-auto rounded-lg">
            <div className="relative" onMouseLeave={() => setCategoriesState(false)}>
              <div
                className={`bg-slate-100 w-full text-black h-10 flex items-center px-3 cursor-pointer ${categoriesState ? "rounded-tl-lg" : 'rounded-l-lg'}`}
                onClick={() => setCategoriesState((prev) => !prev)}
              >
                Categories
              </div>
              {categoriesState && (
                <div className="absolute  bg-white mt-0 w-full rounded-b-lg shadow-md z-10 max-h-72 overflow-y-auto scrollbar-hidden">
                  {category.map((item, index) => (
                    <div key={index}>
                      <div
                        onClick={()=>handleCategory(item.category)}
                        className="block px-4 py-2 hover:bg-gray-200 text-black cursor-pointer"
                      >
                        {item.title}
                      </div>
                      <hr></hr>
                    </div>
                  ))}
                </div>
              )}
            </div>


            <input type="text"
              className="focus:outline-none flex-1 ml-2 sm:w-56 xs:w-36 lg:w-96 text-black" placeholder="Search Amazon.in..."
              value={input}
              onChange={(e) => { setinput(e.target.value) }}
              onBlur={() => setinput('')} />

            {filteredResults.length > 0 && (
              <div
                className="absolute top-12 left-auto ml-[100px] w-[391px] bg-white text-black shadow-lg rounded-b-lg max-h-60 overflow-y-auto z-10 scrollbar-hidden" 
              >
                {filteredResults.map((item, index) => (
                  <>
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {setinput(item.title); setarr(item)}}
                  >
                    {item.title}
                  </div>

            </>
                ))}
              </div>
            )}
                   <div className="bg-[#FFC83D] w-14 rounded-r-lg flex justify-center cursor-pointer" onClick={()=>handleSearch(arr)}>
              <img src={search} className="h-8 mt-1" />
            </div>
           
          </div>

          {!authStatus ?
            <div className="cursor-pointer text-base" onClick={() => navigate('/login')}>
              <span className="text-xs xs:hidden sm:hidden">Hello, SignIn
              </span>
              <br></br>
              Accounts & lists
            </div> : null}
            
          {authStatus &&
            <div className="cursor-pointer text-xs" onClick={logOutHandler}>
              Hello,<span className="text-[#FFC83D] text-base "> {userName}👋
              </span>
              <br></br>
              <span className="text-base">
              Log Out
              </span>
            </div>}
            {/* <div className="hidden xs:block sm:block ml-2" onClick={logOutHandler}>
              <div>LogOut</div>
            </div>
         */}
          <Link className="mx-10 text-base" to='/yourOrders' >
            {/* returns<br></br>&  */}
            Orders
          </Link>

          <div className="mr-10 flex items-center text-base">
            <Link to="/cart" className="flex items-center gap-2">
              <img src={cart} className="w-6 -mr-1" alt="Cart" />
              <span className="text-[#FFC83D] -mr-1">Cart</span>
              <span className="text-black px-[8px] py-[1px] rounded-full bg-[#FFC83D]">{cartData.length}</span>
            </Link>
          </div>
        </div>
        <div onClick={()=>navigate('/AddProduct')} className="mr-10 flex items-center text-base cursor-pointer">post</div>
        
      </header>
      <Categories className={'flex max-w-screen justify-evenly bg-gray-600 h-10 items-center text-white overflow-scroll scrollbar-hidden overflow-x-auto whitespace-nowrap'} />
    </>

  );
};

export default Header;
