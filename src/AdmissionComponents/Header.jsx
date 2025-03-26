import React from 'react'

const Header = () => {
  return (
    <div>
       <div className="lg:px-20 px-5   py-10 ">
                <div className="flex items-center rounded-[10px] bg-[white] flex-wrap justify-between border-[3px] border-[black] px-10 py-24" style={{ boxShadow: "4px 4px 0px black" }}>
                    <div className="max-w-[530px] lg:block flex flex-col ">
                        <button className="text-[#262626] rounded-[10px] px-[20px] py-[10px]  border-[#262626] border-[2px] ">Admission</button>
                        <h1 className="text-[38px] lg:text-start text-center text-[#1A1A1A] font-[700] ">Join Our Family of Young Learners</h1>
                    </div>
                    <p className="text-[16px] text-[#333333] lg:text-start text-center max-w-[530px]">At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school.</p>
                </div>

            </div>
    </div>
  )
}

export default Header
