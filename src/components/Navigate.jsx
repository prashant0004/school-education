import React from 'react'

const SchoolInfo = [
    {
        id: 1,
        title: "About Us",
        link: "#",
        description: "Learn more about our kindergarten school, our mission, vision, and values, and the dedicated team of educators who are committed to providing a nurturing and stimulating learning environment for your child."

    },
    {
        id: 2,
        title: "Academic ",
        link: "#",
        description: "Discover the wide range of programs we offer at our kindergarten school, designed to cater to the unique learning needs of each child, and to provide a holistic and enriching learning experience."

    },
    {
        id: 3,
        title: "Admissions",
        link: "#",
        description: "Find out more about the admissions process at our kindergarten school, including important dates, requirements, and procedures, and take the first step towards enrolling your child in our school."

    },
    {
        id: 4,
        title: "Student Life",
        link: "#",
        description: "Stay up-to-date with the latest events and activities happening at our kindergarten school, from open houses and parent-teacher meetings to field trips and special celebrations."

    },

]

const Navigate = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10 space-y-[10px] p-[50px]">
            <div className="bg-[white] max-w-[248px] border-[3px] border-[black] p-[10px] rounded-[10px]">Explore More</div>
            <div className="text-[48px] text-[#1A1A1A] text-center font-[700]">Navigate through our Pages</div>
            <div className="text-[16px] text-center max-w-[900px] text-[#333333]">Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school</div>

            <div className="flex flex-wrap gap-16 items-center justify-center  mt-10 ">
                {SchoolInfo.map((item) => (
                    <div key={item.id} className="flex flex-col border min-h-[400px] rounded-[10px] border-[black]  bg-[white] items-center justify-center mt-10 p-[30px]" style={{ boxShadow: "4px 4px 0px black", }}>
                        <div className="text-[24px] text-[#1A1A1A] font-[700]">{item.title}</div>
                        <div className="flex justify-center mt-8 gap-3 w-[90%] ">
                            <div className="bg-[#FFBE99] lg:w-[15%] text-[black] p-2"></div>
                            <div className="bg-[#FFBE99] lg:w-[15%] text-[black] p-2"></div>
                            <div className="bg-[#FFBE99] lg:w-[15%] text-[black] p-2"></div>
                            <div className="bg-[#FFBE99] lg:w-[15%] text-[black] p-2"></div>
                            <div className="bg-[#FFBE99] lg:w-[15%] text-[black] p-2"></div>
                            <div className="bg-[#FFBE99] lg:w-[15%] text-[black] p-2"></div>
                        </div>
                        <div className="text-[16px] text-center max-w-[500px] mt-10 text-[#333333]">{item.description}</div>
                        <button className="bg-[#FFDECC] mt-10 w-full border-[3px] border-[black] py-4 rounded-[10px]">Learn More</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navigate
