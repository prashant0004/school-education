import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="flex  bg-[#FFF5F0] py-[50px] px-5 justify-center ">
            <div className=" max-w-[1380px]  lg:p-[80px] lg:px-[100px] p-[40px] bg-white border-[3px] border-[black] rounded-[10px] " style={{ boxShadow: "4px 4px 0px black", }} >
                <div className="flex flex-wrap gap-20">
                    <div className="max-w-[350px]  flex flex-col gap-8 flex-wrap">
                        <div className="flex lg:justify-start justify-center items-center gap-2">
                            <img src="/images/shape.png" alt="" />
                            <p className="text-[20px] font-[700px]">Little Learners</p>
                        </div>
                        <div>
                            <p className="text-[14px] lg:text-start text-center text-[#4C4C4D]">We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex lg:justify-start justify-center items-center gap-2">
                                <div className="bg-[#FFF5F0] py-2 px-3 border-[black] border rounded-lg"><i className=" fa-solid fa-envelope"></i></div>
                                hello@littlelearners.com
                            </div>
                            <div className="flex lg:justify-start justify-center items-center gap-2">
                                <div className="bg-[#FFF5F0] py-2 px-3 border-[black] border rounded-lg"><i class="fa-solid fa-circle-user"></i></div>
                                +91 9123456789
                            </div>
                            <div className="flex lg:justify-start justify-center items-center gap-2">
                                <div className="bg-[#FFF5F0] py-2 px-3 border-[black] border rounded-lg"><i class="fa-solid fa-location-dot"></i></div>
                                Somewhere in the world
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-start flex-wrap gap-6">
                        <div>
                            <ul className="flex flex-col lg:text-start text-center gap-5">
                                <li className="text-[20px] font-[600]"><Link to="/">Home</Link></li>
                                <li className="text-[20px] ">Features</li>
                                <li className="text-[20px] ">Our Testimonials</li>
                                <li className="text-[20px] ">Faq</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex flex-col lg:text-start text-center gap-5">
                                <li className="text-[20px] font-[600]"><Link to="/about">About Us</Link></li>
                                <li className="text-[20px]">Our Mission</li>
                                <li className="text-[20px]">Our Vission</li>
                                <li className="text-[20px]">Award and Recognitions</li>
                                <li className="text-[20px]">History</li>
                                <li className="text-[20px]">Teachers</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex text-center lg:text-start flex-col gap-5">
                                <li className="text-[20px] font-[600]"><Link to="/academics">Academics</Link></li>
                                <li className="text-[20px]">Special Features</li>
                                <li className="text-[20px]">Gallery</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex text-center lg:text-start flex-col gap-5">
                                <li className="text-[20px] font-[600]"><Link to="/contact">Contact</Link></li>
                                <li className="text-[20px]">Information</li>
                                <li className="text-[20px]">Map & Direction</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex mt-5 items-center py-[20px]  gap-[20px] border-t-2 border-b-2 border-[black] flex-wrap lg:justify-between md:justify-between justify-center" >
                    <div className="flex lg:gap-3 ">
                        <p>Terms of Service </p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </div>
                    <div className="flex gap-3 ">
                        <button className="bg-[#FFDECC] px-[20px] py-[17px] rounded-lg border-[black] border-[2px] "><i class="fa-brands fa-facebook"></i></button>
                        <button className="bg-[#FFDECC] px-[20px] py-[17px] rounded-lg border-[black] border-[2px] "><i class="fa-brands fa-twitter"></i></button>
                        <button className="bg-[#FFDECC] px-[20px] py-[17px] rounded-lg border-[black] border-[2px] "><i class="fa-brands fa-linkedin"></i></button>
                    </div>
                </div>
                <p className="text-center mt-3">Copyright © [2023] Little Learners Academy. All rights reserved.</p>
            </div>


        </div>
    )
}

export default Footer
