import React from 'react'

const Header = () => {
    return (
        <div>
            <div className="lg:px-20 px-5   py-10 ">
                <div className="flex items-center rounded-[10px] bg-[white] flex-wrap justify-between border-[3px] border-[black] px-10 py-24" style={{ boxShadow: "4px 4px 0px black" }}>
                    <div className="max-w-[530px] lg:block flex flex-col ">
                        <button className="text-[#262626] rounded-[10px] px-[20px] py-[10px]  border-[#262626] border-[2px] ">Contact Us</button>
                        <h1 className="text-[38px] lg:text-start text-center text-[#1A1A1A] font-[700] ">Feel Free To Connect With Us</h1>
                    </div>
                    <div className="">
                        <p className="text-[16px] text-[#333333] lg:text-start text-center max-w-[530px]">We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods.</p>
                        <div className="flex flex-wrap items-center justify-center mt-5 gap-4 max-w-[500px]">
                            <div className="flex lg:justify-start p-2 rounded-lg border-[black] border-[2px] w-[240px] bg-[#FFFCFA] hover:bg-[#b16d19] justify-center items-center gap-2">
                                <div className="bg-[#FFF5F0] py-2 px-3 border-[black] border rounded-lg"><i className=" fa-solid fa-envelope"></i></div>
                                hello@littlelearners.com
                            </div>
                            <div className="flex lg:justify-start p-2 rounded-lg border-[black] border-[2px] w-[240px] bg-[#FFFCFA] hover:bg-[#b16d19] justify-center items-center gap-2">
                                <div className="bg-[#FFF5F0] py-2 px-3 border-[black] border rounded-lg"><i class="fa-solid fa-location-dot"></i></div>
                                Somewhere in the world
                            </div>
                            <div className="flex lg:justify-start p-2 rounded-lg border-[black] border-[2px] w-[240px] bg-[#FFFCFA] hover:bg-[#b16d19] justify-center items-center gap-2">
                                <div className="bg-[#FFF5F0] py-2 px-3 border-[black] border rounded-lg"><i class="fa-solid fa-phone"></i></div>
                                +91 9123456789
                            </div>
                            <div className="flex lg:justify-start p-2 rounded-lg border-[black] border-[2px] w-[240px] bg-[#FFFCFA] hover:bg-[#b16d19] justify-center items-center gap-2">
                                <div className="bg-[#FFF5F0] py-2 px-3 border-[black] border rounded-lg"><i class="fa-solid fa-clock"></i></div>
                                Mon - Fri: 9:00 - 17:00
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
