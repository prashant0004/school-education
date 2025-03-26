import React from 'react'

const FeaturesData = [
    {
        id: 1,
        icon: "fa-solid fa-chart-simple",
        title: "Outstanding Early Childhood Education Awar",
        description: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    },
    {
        id: 2,
        icon: "fa-solid fa-chart-simple",
        title: "Outstanding Early Childhood Education Awar",
        description: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    },
    {
        id: 3,
        icon: "fa-solid fa-chart-simple",
        title: "Outstanding Early Childhood Education Awar",
        description: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    },
    {
        id: 4,
        icon: "fa-solid fa-chart-simple",
        title: "Outstanding Early Childhood Education Awar",
        description: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    },
    {
        id: 5,
        icon: "fa-solid fa-chart-simple",
        title: "Outstanding Early Childhood Education Awar",
        description: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    },
    {
        id: 6,
        icon: "fa-solid fa-chart-simple",
        title: "Outstanding Early Childhood Education Awar",
        description: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    },
    {
        id: 7,
        icon: "fa-solid fa-chart-simple",
        title: "Outstanding Early Childhood Education Awar",
        description: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    },
    {
        id: 8,
        icon: "fa-solid fa-chart-simple",
        title: "Outstanding Early Childhood Education Awar",
        description: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    },

]

const Features = () => {
    return (
        <div className="px-[80px]">
            <div className="flex flex-col items-center justify-center mt-10 space-y-[10px] lg:p-[50px]">
                <div className="bg-[white] max-w-[248px] border-[3px] border-[black] p-[10px] rounded-[10px]">Our Features</div>
                <div className="text-[48px] text-[#1A1A1A] text-center font-[700]">Our Special Features</div>
                <div className="text-[16px] text-center  max-w-[900px] text-[#333333]">Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</div>
            </div>
            <div className="flex mt-[50px] gap-10">
                {AwardsData.map((data) => {
                    return (
                        <div key={data.id} className="bg-[white] relative rounded-[10px]  p-[40px] border-[3px] border-[black]" style={{ boxShadow: "4px 4px 0px black" }}>
                            <div className="px-[20px] absolute -top-6 left-7 bg-[#FFDECC] py-[10px] rounded-[10px] border-[2px] border-[black] w-[55px]"><i className={data.icon}></i></div>
                            <div className="mt-[20px] text-[24px] font-[700] text-[#1A1A1A]">{data.title}</div>
                            <p className="lg:w-[330px] md:w-[300px] w-[278px] text-[16px] text-[#4C4C4D] mt-5">{data.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Features
