import React from 'react'

const Header = () => {
  return (
    <div>
       <div className="lg:px-20 px-5   py-10 ">
                <div className="flex items-center rounded-[10px] bg-[white] flex-wrap justify-between border-[3px] border-[black] px-10 py-24" style={{ boxShadow: "4px 4px 0px black" }}>
                    <div className="max-w-[530px] lg:block flex flex-col ">
                        <button className="text-[#262626] rounded-[10px] px-[20px] py-[10px]  border-[#262626] border-[2px] ">Enriching Student Life</button>
                        <h1 className="text-[38px] lg:text-start text-center text-[#1A1A1A] font-[700] ">Embracing Learning with Discovery and Joy</h1>
                    </div>
                    <p className="text-[16px] text-[#333333] lg:text-start text-center max-w-[530px]">Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development.</p>
                </div>

            </div>
    </div>
  )
}

export default Header
