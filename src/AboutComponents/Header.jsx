import React from 'react'

const Header = () => {
  return (
    <div className="lg:px-20 px-5   py-10 ">
        <div className="flex items-center rounded-[10px] bg-[white] flex-wrap justify-between border-[3px] border-[black] px-10 py-24" style={{ boxShadow: "4px 4px 0px black" }}>
        <div className="max-w-[530px] lg:block flex flex-col ">
        <button className="text-[#262626] rounded-[10px] px-[20px] py-[10px]  border-[#262626] border-[2px] ">Academics</button>
        <h1 className="text-[38px] lg:text-start text-center text-[#1A1A1A] font-[700] ">Nurturing Young Minds for Success</h1>
      </div>
      <p className="text-[16px] text-[#333333] lg:text-start text-center max-w-[530px]"> Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration.</p>
        </div>
     
    </div>
  )
}

export default Header
