import React from 'react'

const Cdata = [
    {
        id: 1,
        title: "Holistic Learning Approach",
        description: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
        icon: "fa-solid fa-user-graduate"
    },
    {
        id: 2,
        title: "Experienced Educators",
        description: "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
        icon: "fa-solid fa-crown"
    },
    {
        id: 3,
        title: "Nurturing Environment",
        description: "We prioritize safety and provide a warm and caring atmosphere for every child.",
        icon: "fa-solid fa-mask-face"
    },
    {
        id: 4,
        title: "Play-Based Learning",
        description: "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
        icon: "fa-solid fa-flag"
    },
    {
        id: 5,
        title: "Individualized Attention",
        description: "Our small class sizes enable personalized attention, catering to each child's unique needs.",
        icon: "fa-solid fa-dharmachakra"
    },
    {
        id: 6,
        title: "Parent Involvement",
        description: "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
        icon: "fa-solid fa-users"
    },
    
];


const Benifits = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10 space-y-[10px] p-[50px]">
            <div className="bg-[white] max-w-[248px] border-[3px] border-[black] p-[10px] rounded-[10px]">Children Deserve Bright Future</div>
            <div className="text-[48px] text-[#1A1A1A] font-[700]">Our Benefits</div>
            <div className="text-[16px] text-center max-w-[900px] text-[#333333]">With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.</div>
           
           {/* cards */}
            <div className="flex flex-wrap justify-center items-center  gap-10 " style={{marginTop:"50px"}}>
                {Cdata.map((data) => {
                    return (
                       
                        <div key={data.id} className="bg-[white] border-[3px] relative mt-3 border-[black] h-[240px] max-w-[400px] p-[30px] rounded-[10px] "  style={{ boxShadow: "4px 4px 0px black" }}>
                            <div className="absolute bg-[#FFDECC] border-[3px] border-[black] rounded-[10px] px-5 py-4 top-[-30px] left-[30px]">
                                <i className={data.icon}></i>
                               
                            </div>
                            <div className="text-[24px] mt-5 text-[#1A1A1A] font-[700]">{data.title}</div>
                            <div className="text-[16px] mt-2 text-[#333333]" >{data.description}</div>
                        </div>
                       
                    )
                })}
            </div>
        </div>

    )
}

export default Benifits
