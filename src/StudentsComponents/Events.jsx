import React from 'react'
const LearningData = [
    { id: 1, subject: "Cultural Festival", image: "/images/arts.png", description: "Encouraging creativity, storytelling, and communication skills." },
    { id: 2, subject: "Annual Sports Day", image: "/images/physical.png", description: "Promoting physical fitness, coordination, and teamwork." },
    { id: 3, subject: "Art Exhibitions", image: "/images/crafts.png", description: "Encouraging creativity through various art forms and crafts." },
    { id: 4, subject: "Graduation Ceremony", image: "/images/social.png", description: "Celebrating achievements and fostering a sense of accomplishment." },
    { id: 5, subject: "Science Fair", image: "/images/science.png", description: "Exploring the natural world through hands-on experiments and investigations." },
    { id: 6, subject: "International Day", image: "/images/social.png", description: "Cultivating an understanding of diverse cultures and communities." }
];

const Events = () => {
  return (
    <div className="lg:px-[80px] px-10 ">
    <div className="flex flex-col items-center justify-center mt-10 space-y-[10px] lg:p-[50px]">
        <div className="bg-[white] max-w-[248px] border-[3px] border-[black] p-[10px] rounded-[10px]">Our Features</div>
        <div className="text-[48px] text-[#1A1A1A] text-center font-[700]">Events & Celebrations</div>
        <div className="text-[16px] text-center  max-w-[900px] text-[#333333]">At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include</div>
    </div>
    <div className="flex flex-wrap justify-center mt-10 gap-[60px]">
        {LearningData.map((data) => {
            return (
            <div key={data.id} className="max-w-[400px] relative p-[40px] rounded-lg border-[black] border-[2px]  bg-[white]" style={{ boxShadow: "4px 4px 0px black" }}>
                <img src={data.image} className="max-w-[320px] rounded-[12px] border-[2px] border-[black] "   alt="" />
                <div className="text-center mt-[50px]">
                    <div className="text-[24px] font-[600] text-[#1A1A1A]">{data.subject}</div>
                    <p className="text-[16px] text-[#4C4C4D]">{data.description}</p>
                </div>
            </div>
            )
        })}
    </div>
</div>
  )
}

export default Events
