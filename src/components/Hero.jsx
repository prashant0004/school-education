import React from 'react'

const Hero = () => {
    return (
        <div className="flex lg:flex-row flex-col wrap gap-10 max-w-[1339px] items-center mx-auto mt-20" >
            <div className=" p-2 bg-[#FFBE99] relative">
               
                <div className="max-w-[600px] relative">
                    <img className="lg:max-w-[600px] max-w-[360px]  border-[2px] border-[black]" src="/images/Image.png" alt="image" />
                </div>
                <div className="w-5 h-5 rounded-[100px] absolute left-1 top-1 bg-white border-[2px] border-[black]"></div>
                <div className="w-5 h-5 rounded-[100px] absolute right-1 top-1 bg-white border-[2px] border-[black]"></div>
                <div className="w-5 h-5 rounded-[100px] absolute left-1 bottom-1 bg-white border-[2px] border-[black]"></div>
                <div className="w-5 h-5 rounded-[100px] absolute bottom-1 right-1 bg-white border-[2px] border-[black]"></div>
            </div>
            <div className="flex items-center lg:items-start flex-col ">    
                <div className="flex items-center lg:items-start flex-col ">
                    <p className="text-[#262626] ">Welcome to Little Learners Academy</p>
                    <div className="h-[2px] bg-[#262626] mt-1 lg:w-64"></div>
                    <h1 className="text-[40px] text-[#1A1A1A] lg:text-start font-[700] text-center">Where Young Minds Blossom and <span className="text-[#FF8D4D]">Dreams Take Flight.</span></h1>
                    <p className="text-[16px] text-[#333333] lg:text-start text-center mt-3">Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
                </div>

                <div className="flex flex-wrap justify-center gap-10 mt-5 bg-[#FFEFE5] p-6 rounded-[10px] max-w-[350px] lg:max-w-[600px] border-[2px] border-[black] " style={{ boxShadow: "4px 4px 0px #FF8D4D" }}>
                    <div>
                        <div className="text-[34px] text-center font-[700] text-[#262626]">+7000 </div>
                        <p>Students Passed Out</p>
                    </div>
                    <div>
                        <div className="text-[34px]   text-center font-[700] text-[#262626]">+37 </div>
                        <p>Awards & Recognitions</p>
                    </div>
                    <div>
                        <div className="text-[34px]  text-center font-[700] text-[#262626]">+15 </div>
                        <p>Experience Educators</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
