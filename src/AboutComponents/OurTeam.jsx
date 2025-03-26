import React from 'react'

const TeamInfo = [
    {
        id: 1,
        dp: "/images/dp.png",
        name: "Ms. Sarah Anderson",
        icon: "fa-solid fa-envelope",
        title: "Qualification:Bachelor's Degree in Early Childhood Education",
        description: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
    },
    {
        id: 2,
        dp: "/images/dp.png",
        name: "Ms. Sarah Anderson",
        icon: "fa-solid fa-envelope",
        title: "Qualification:Bachelor's Degree in Early Childhood Education",
        description: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
    },
    {
        id: 3,
        dp: "/images/dp.png",
        name: "Ms. Sarah Anderson",
        icon: "fa-solid fa-envelope",
        title: "Qualification:Bachelor's Degree in Early Childhood Education",
        description: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
    },
    {
        id: 4,
        dp: "/images/dp.png",
        name: "Ms. Sarah Anderson",
        icon: "fa-solid fa-envelope",
        title: "Qualification:Bachelor's Degree in Early Childhood Education",
        description: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
    },
    {
        id: 5,
        dp: "/images/dp.png",
        name: "Ms. Sarah Anderson",
        icon: "fa-solid fa-envelope",
        title: "Qualification:Bachelor's Degree in Early Childhood Education",
        description: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
    },
    {
        id: 6,
        dp: "/images/dp.png",
        name: "Ms. Sarah Anderson",
        icon: "fa-solid fa-envelope",
        title: "Qualification:Bachelor's Degree in Early Childhood Education",
        description: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
    },
]

const OurTeam = () => {
    return (
        <div className="px-[80px]">
            <div className="flex flex-col items-center justify-center mt-16 space-y-[10px] my-[50px] ">
                <div className="bg-[white] max-w-[248px] border-[3px] border-[black] p-[10px] rounded-[10px]">Our Teachers With Experties</div>
                <div className="text-[48px] text-[#1A1A1A] text-center font-[700]">Our Team Members</div>
                <div className="text-[16px] text-center max-w-[900px] text-[#333333]">At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning.</div>
            </div>
            <div className="flex justify-center flex-wrap gap-16">
                {TeamInfo.map(member => (
                    <div key={member.id} className="bg-white p-10 max-w-[625px] border-[black] border-[3px] rounded-lg shadow-md" style={{ boxShadow: "4px 4px 0px black" }}>
                        <div className="flex flex-wrap items-center justify-center lg:justify-between">
                            <div className="flex  items-center gap-3">
                                <img src={member.dp} alt={member.name} className="w-25 h-25 rounded-[10px] mx-auto" />
                                <h2 className="text-xl  text-[24px] font-[600] text-center mt-4">{member.name}</h2>
                            </div>
                            <button className="px-[20px] py-[15px] rounded-lg border-[2px] border-[black] bg-[#FFDECC] text-[25px] mt-4">
                                <i className={member.icon}></i>
                            </button>
                        </div>

                          <div className="bg-[#FFF5F0] p-[20px] mt-8 rounded-lg border-[black] border-[2px]">
                          <p className="text-[20px] font-[600]  text-[#333333]">{member.title}</p>
                          <p className="text-[16px] text-[#333333] mt-2">{member.description}</p>
                          </div>
                       

                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurTeam
