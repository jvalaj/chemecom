import React from 'react'
import data from "../database/products.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Products = ({handleAddProduct}) => {

  const Alert = () => {
    toast.success('Added To Cart', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      });
  }
  return (
        
        <div className='max-w-screen-lg mx-auto mt-6 flex justify-center flex-col'>
          <div className='w-full flex items-center justify-center mx-auto'>
          <input placeholder=" Enter your required medicine here" className='w-full rounded-md border p-2 border-black m-4 '/>

          <button className='bg-blue-600 text-white rounded-md p-2 my-4 mr-4'> Search </button>

          </div>

          <div className='max-w-screen-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4'>
            
      {
        data.map((item) => (
          
            <div className="m-3 border rounded-lg shadow bg-gray-700 border-gray-700 overflow-hidden " key={item.id}>
                <div className='h-40 sm:h-70 p-5 bg-white flex justify-center items-center overflow-hidden'>
                    <img className=''  layout="fill" objectFit="cover" src={item.imageUrl} alt="" />
                </div>
              <div className="p-2 flex flex-col justify-center gap-1">
                    <h5 className=" text-xl font-medium tracking-tight text-white">{item.name}</h5>

                    <p className=" truncate text-slate-400 "> {item.category}</p>

                    <div className='grid grid-cols-2  items-center'>
                      <div className='text-2xl p-2 text-white font-medium'>
                        <p className=''>₹ {item.price}</p>
                      </div>
                      
                      <div className='p-2'>
                        <button className="flex-wrap flex bg-green-400 lg:p-1 p-1 sm:p-2 hover:bg-green-500 rounded-md" onClick={
                          () => {
                            handleAddProduct(item);
                            Alert();
                          }}>
                            Add to Cart</button>
                      </div>
                      <ToastContainer closeButton={false} closeOnClick={false}/>
                    </div>
                    
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