import React,{useEffect} from 'react'
import amazonLogo from '../assets/amazon_logo.png'
function Footer() {
 const scrollTop = () => {
    window.scrollTo(0, 0);
}
  return (
    <>
    <div onClick={scrollTop} className='flex w-full cursor-pointer h-12 justify-center bg-gray-600 text-white items-center'>
      <div>
        <div  className=' transition-transform duration-500 ease-in-out'>Back to top
        </div>
       
        </div>
    </div>
    <div className='bg-[#131921] pt-10 '>
    <div className='grid lg:grid-cols-4 sm:grid-cols-2 mx-auto text-[20px] text-white leading-loose '>
      
      <div>
      <div>Get to Know Us</div>
      <div className='text-[14px]'>
      <div>About Amazon</div>
      <div>Careers</div>
      <div>Amazon Science</div>
      <div>Press releases</div>
      </div>
      </div>

      <div>
      <div>Connect with Us</div>
      <div className='text-[14px]'>
      <div>Facebook</div>
      <div>Instagram</div>
      <div>Twitter</div>
      </div>
      </div>

      <div>
      <div>Make Money with Us</div>
      <div className='text-[14px]'>
      <div>Sell on Amazon</div>
      <div>Sell under Amazon Accelerator</div>
      <div>Protect and Build Your Brand</div>
      <div>Amazon Global Selling</div>
      <div>Supply to Amazon</div>
      <div>Become an Affiliate</div>
      <div>Fulfilment by Amazon</div>
      <div>Advertise Your Products</div>
      <div>Amazon Pay on Merchants</div>
      </div>
      </div>
      
      <div>
      <div>Let Us Help You</div>
      <div className='text-[14px]'>
      <div>Your Account</div>
      <div>Returns Centre</div>
      <div>Recalls and Product Safety Alerts</div>
      <div>100% Purchase Protection</div>
      <div>Amazon App Download</div>
      </div>
      </div>

    </div>
     <div className='flex justify-center mt-14'>
      <img src={amazonLogo}/>
    </div>
    </div>
   
    </>
  )
}

export default Footer