import React from "react";

const Cart = ({ cartItems, handleAddProduct , handleRemoveProduct , clearProduct }) => {

    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

    return (
        <div className="max-w-screen-lg mx-auto p-3 mt-6 flex justify-center flex-col">
            <div className="w-full mb-4 text-3xl font-semibold p-2 flex items-center justify-center mx-auto">
                Cart
            </div>
      
            {
                cartItems.length === 0 && (
                    <div className="p-2 text-center">
                        No items in the Cart.
                    </div>
                )
            }
            <div>
                {cartItems.map((item) =>
    
                <div key={item.id} className="w-full h-70 border grid md:grid-cols-5 my-2 border-black">
                    <div className="sm:h-50 p-5 bg-slate-200 flex items-center justify-center overflow-hidden">
                        <img  alt="image description" layout="fill" objectFit="cover" className="h-[100px] w-[100px]" src={item.imageUrl}/>
                    </div>
                    <div className="p-3 flex flex-col bg-slate-300 justify-center">
                        <h2 className="font-semibold text-xl">{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                    <div className="flex items-center p-3 bg-slate-400 justify-center gap-4">
                        <button className="border my-auto hover:bg-red-500 border-red-500 p-2" onClick={() => handleRemoveProduct(item)}>-</button>
                        <div className="border border-black rounded-md my-auto p-3 ">₹ {item.price}</div>
                        <button className="border my-auto hover:bg-green-500 border-green-500 p-2" onClick={() => handleAddProduct(item)}>+</button>
                    </div>
                    <div className="flex items-center justify-center bg-slate-500 text-white">{item.quantity}</div>
                    <button className="p-2 bg-red-400 hover:bg-red-800" onClick={() => clearProduct(item)}>Remove</button>
                </div>
                
                
                


                )}

                {
                    cartItems.length > 0 && (
                        <div className="w-full mt-3 border border-green-500 p-2 grid grid-cols-2">
                            <div className="flex p-2 justify-start">Total</div>
                            <div className="flex p-2 justify-end  items-center text-green-500">
                            Rs. {totalPrice}
                            </div>
                       </div>

                    )
                }
               
                
            </div>
            
        </div>
        
    )
}

export default Cart;