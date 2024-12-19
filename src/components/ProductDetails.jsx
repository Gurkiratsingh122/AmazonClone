import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AddToCartBtn from './oneComponentUsedAll/AddToCartBtn';
import ProductView from './oneComponentUsedAll/ProductView';

function ProductDetails() {
    const [image, setImage] = useState('')
    const item = useSelector((state) => state.details.ProductData);
    useEffect(() => {
        if (item) {
            setImage(item.image);
        }
    }, [item]);
    
    return (
        <>
            {item ? (
                <>
                    <div className="bg-slate-100 flex justify-center items-center  p-6">
                        <div className="bg-white flex flex-col md:flex-row rounded-lg shadow-md p-6 w-full">
                            <div className="flex justify-center md:w-1/3">
                                <div className='ml-6 my-auto'>
                                    <div className='-ml-6' >
                                        {[item.image, item.image1, item.image2, item.image3].filter((item=>item)).map((imgSrc, index) => (
                                            <img
                                                key={index}
                                                src={imgSrc}
                                                onMouseOver={() => setImage(imgSrc)}
                                                className={`w-14 h-auto mr-4 object-contain my-3 px-2 py-2 hover:border-2 hover:border-slate-400 hover:rounded-lg ${imgSrc === image ? 'border-2 border-slate-400 rounded-lg' : ''
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <img
                                    src={image}
                                    className="w-80 h-auto object-contain"
                                />
                            </div>
                            <div className="mt-4 md:mt-0 md:ml-6 md:w-2/3">
                                <div className="text-2xl md:text-4xl font-semibold mb-2">
                                    {item.title}
                                </div>
                                <div className="text-lg md:text-2xl text-gray-700 mb-4">
                                    {item.description}
                                </div>
                                <div className="text-gray-600 text-sm mb-4 capitalize">
                                    {item.category}
                                </div>
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="text-yellow-500 font-bold text-lg">
                                        ⭐ {item.rating.rate}
                                    </div>
                                    <div className="text-gray-500">({item.rating.count} reviews)</div>

                                </div>
                                <div className="text-2xl md:text-4xl font-semibold mb-2">
                                    $ {item.price}
                                </div>
                                <AddToCartBtn item={item} />
                            </div>
                        </div>

                    </div>
                    <div className=''>
                        <div className='text-4xl my-4 font-semibold'>Similar Products</div>
                        <ProductView />
                    </div>
                </>
            ) : (
                <div>Nothing to show here...</div>

            )}
        </>
    );
}

export default ProductDetails;
