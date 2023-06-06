import React from 'react'
import data from "../database/products.json";

const Products = ({handleAddProduct}) => {
  return (
        
        <div className='max-w-screen-lg mx-auto mt-6 flex justify-center flex-col'>
          <div className='w-full flex items-center justify-center mx-auto'>
          <input placeholder=" Enter your required medicine here" className='w-full rounded-md border p-2 border-black m-4 '/>

          <button className='bg-blue-600 text-white rounded-md p-2 my-4 mr-4'> Search </button>

          </div>

          <div className='max-w-screen-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4'>
            
      {
        data.map((item) => (
          
            <div className="h-50 sm:h-80 m-3 border rounded-lg shadow bg-gray-700 border-gray-700 overflow-hidden " key={item.id}>
                <div className='h-40 sm:h-70 p-5 bg-white flex justify-center items-center overflow-hidden'>
                    <img className=''  layout="fill" objectFit="cover" src={item.imageUrl} alt="" />
                </div>
              <div className="p-5 flex flex-col gap-3">
                    <h5 className=" text-2xl font-bold tracking-tight text-white">{item.name}</h5>
                    <p className=" font-normal text-gray-400">{item.category}</p>
                    <button className="bg-green-400 rounded-md p-2 ml-auto" onClick={() => handleAddProduct(item)}>
                        Rs. {item.price}
                    </button>
              </div>
            </div>


        )
        )
      }
      </div>
    </div>

  )
}

export default Products