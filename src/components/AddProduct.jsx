import React, { useState } from 'react';
import { products } from './API/products';
import { useNavigate } from 'react-router-dom';
function AddProduct() {
  const navigate = useNavigate()
  const initialvalues = {
    id: Math.random(),
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      count: 23,
      rate: 4.5,
    },
    quantity: 1,
  };

  const [data, setData] = useState(initialvalues);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const AddItem = (e) => {
    e.preventDefault();
    products.push(data);
    setData(initialvalues); 
    navigate('/home')
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-semibold text-center mb-4">Add New Product</h2>
      <form onSubmit={AddItem} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={data.title}
            onChange={handleChange}
            placeholder="Enter product title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            className="w-full px-3 py-2 border border-gray-300 rounded-md "
            value={data.price}
            onChange={handleChange}
            placeholder="Enter product price"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md "
            value={data.description}
            onChange={handleChange}
            placeholder="Enter product description"
            rows="3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={data.category}
            onChange={handleChange}
          >
            {['','menClothing',"jewelery","electronics","women's clothing"].map((item)=>{
              return(
                <option value={item}>{item}</option>
              )
            })}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={data.image}
            onChange={handleChange}
            placeholder="Enter product image URL"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#FFC83D]  text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
