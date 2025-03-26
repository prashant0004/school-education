import React from 'react'

const Header = () => {
    return (
            <div className="lg:px-20 px-5   py-10 ">
                <div className="flex items-center rounded-[10px] bg-[white] flex-wrap justify-between border-[3px] border-[black] px-10 py-24" style={{ boxShadow: "4px 4px 0px black" }}>
                    <div className="max-w-[530px] lg:block flex flex-col ">
                        <button className="text-[#262626] rounded-[10px] px-[20px] py-[10px]  border-[#262626] border-[2px] ">Overview</button>
                        <h1 className="text-[38px] lg:text-start text-center text-[#1A1A1A] font-[700] ">Welcome to Little Learners Academy</h1>
                    </div>
                    <p className="text-[16px] text-[#333333] lg:text-start text-center max-w-[530px]">A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.</p>
                </div>

            </div>
    )
}

export default Header
