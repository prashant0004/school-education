import React from 'react'

const SupportData = [
    {
        id: 1,
        icon: "fa-solid fa-chart-simple",
        title: "Counseling",
        description: "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
    },
    {
        id: 2,
        icon: "fa-solid fa-chart-simple",
        title: "Learning Support",
        description: "Our educators provide additional assistance to students who may require extra support in their academic journey.",
    },
    {
        id: 3,
        icon: "fa-solid fa-chart-simple",
        title: "Parent-Teacher Collabration",
        description: "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development.",
    },

]
const Support = () => {
    return (
        <div className="lg:px-[80px] px-[20px]">
            <div className="flex flex-col items-center justify-center mt-10 space-y-[10px] lg:p-[50px]">
                <div className="bg-[white] max-w-[248px] border-[3px] border-[black] p-[10px] rounded-[10px]">Our Achievements</div>
                <div className="text-[48px] text-[#1A1A1A] text-center font-[700]">Student Support</div>
                <div className="text-[16px] text-center  max-w-[900px] text-[#333333]">At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include</div>
            </div>
            <div className="flex mt-[50px] justify-center flex-wrap gap-10">
                {SupportData.map((data) => {
                    return (
                        <div key={data.id} className="bg-[white] relative rounded-[10px]  p-[40px] border-[3px] border-[black]" style={{ boxShadow: "4px 4px 0px black" }}>
                            <div className="px-[20px] absolute -top-6 left-7 bg-[#FFDECC] py-[10px] rounded-[10px] border-[2px] border-[black] w-[55px]"><i className={data.icon}></i></div>
                            <div className="mt-[20px] text-[24px] font-[700] max-w-[320px] text-[#1A1A1A]">{data.title}</div>
                            <p className="max-w-[320px] text-[16px] text-[#4C4C4D] mt-5">{data.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Support
