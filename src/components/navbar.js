import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const handleNav = () => {
        setToggle(!toggle);
    };

    return (

        <nav className=" border-gray-200 bg-zinc-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className=" text-2xl text-white">Chem Shop</span>
                </a>

                <ul className='hidden sm:flex sm:gap-8 sm:text-white'>
                    <li>
                        <a href="#">
                            Home
                            </a>
                    </li>
                    <li>
                        <a href="#">
                            About
                        </a>
                    </li>
                </ul>

                <div onClick={handleNav} className={toggle ? 'hidden': ' hover:bg-white hover:text-black sm:hidden border border-white p-2 rounded-md'}>
                    <AiOutlineMenu className='text-white' size={20} />
                </div>
                <div className={toggle ? ' mt-2 p-2 flex flex-col w-screen h-screen bg-zinc-700 ease-in-out delay-150 duration-300  ' : 'hidden'} >
                    <div onClick={handleNav} className=' fixed top-[2%] right-[3%] hover:bg-white hover:text-black sm:hidden border border-white p-2 rounded-md'>
                        <AiOutlineClose className=" text-red-700" size={20} />
                    </div>
                    
                    <ul className="gap-y-14 items-center my-auto bg-zinc-700 flex-col text-xl flex">
                        <li className="hover:text-teal-400 text-white">
                            <a href="#">
                                Home
                                </a>
                        </li>
                        <li className="hover:text-teal-400 text-white">
                            <a href="#">
                                Products
                            </a>
                        </li>
                        <li className="hover:text-teal-400 text-white">
                            <a href="#">
                                About
                            </a>
                        </li>
                        <li className="hover:text-teal-400 text-white">
                            <a href="#">
                            Cart
                            </a>
                        </li>
                        <li className="hover:text-teal-400 text-white">
                            <a href="#">
                                Login / Signup
                            </a>
                        </li>
                    
                    </ul>
                </div>
                


                

            </div>
        </nav>

    )
}

export default Navbar;