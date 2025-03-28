import React from 'react'
import { useState } from 'react'
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="bg-[#FFF5F0] px-[20px]">
            <div className=" max-w-[1339px]  flex flex-col gap-2 mx-auto">
                <div className=" mt-4 border-[black] border-[2px] rounded-[10px] text-center py-2 max-w-[1339px]  bg-[#FFDECC]">
                   <Link to="/admission"> Admission is Open, Grab your seat now</Link> <i className="fa-solid fa-arrow-right"></i>
                </div>
                <div className=" flex bg-[white] justify-between border-[black] border-[2px] rounded-[10px] items-center">
                    <div>
                        <div className="flex gap-2 bg-[#FF8D4D] px-4 py-[17px]  rounded-l-[8px] items-center">
                            <img src="/images/shape.png" alt="" />
                            <p className="">Little Learners</p>
                        </div>
                    </div>
                    <ul className="md:flex hidden">
                        <li className="p-5 border-l-2 hover:bg-[#FFEFE5] border-black"><Link to="/">Home</Link></li>
                        <li className="p-5 border-l-2 hover:bg-[#FFEFE5] border-black"><Link to="/about">About Us</Link></li>
                        <li className="p-5 border-l-2 hover:bg-[#FFEFE5] border-black"><Link to="/academics">Academics</Link></li>
                        <li className="p-5 border-l-2 hover:bg-[#FFEFE5] border-black"><Link to="/admission">Admissions</Link></li>
                        <li className="p-5 border-l-2 hover:bg-[#FFEFE5] border-black"><Link to="/students">Student Life</Link></li>
                        <li className="p-5 border-l-2 rounded-r-lg bg-[#FFAE80] hover:bg-[#FFEFE5] border-black"><Link to="/contact">Contact</Link></li>
                    </ul>
                    <button onClick={toggleMenu} className="md:hidden cursor-pointer mr-4 focus:outline-none">
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>

                </div>
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden  bg-white"
                >
                    <ul className="flex flex-col lg:hidden space-y-4 p-4">
                        <li className="p-5 border-b-2 text-center hover:bg-[#FFEFE5] border-black"><Link to="/" onClick={() => setIsOpen(false)}>Home</Link> </li> 
                        <li className="p-5 border-b-2 text-center hover:bg-[#FFEFE5] border-black"><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
                        <li className="p-5 border-b-2 text-center hover:bg-[#FFEFE5] border-black"><Link to="/academics" onClick={() => setIsOpen(false)}>Academics</Link></li>
                        <li className="p-5 border-b-2 text-center hover:bg-[#FFEFE5] border-black"><Link to="/admission" onClick={() => setIsOpen(false)}>Admissions</Link></li>
                        <li className="p-5 border-b-2 text-center hover:bg-[#FFEFE5] border-black"><Link to="/students" onClick={() => setIsOpen(false)}>Student Life</Link></li>
                        <li className="p-5 border-b-2 text-center bg-[#FFAE80] hover:bg-[#FFEFE5] border-black"><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                    </ul>
                </motion.div>

            </div>
        </div>
    )
}

export default Navbar
