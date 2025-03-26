import React from 'react'

const MissionCard = [
    {
        id: 1,
        title: "Mission",
        icon: "fa-solid fa-house-flag",
        description: "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.",

    },
    {
        id: 2,
        title: "Vission",
        icon: "fa-solid fa-glasses",
        description: "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.",
    },
]

const Mission = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center mt-10 space-y-[10px] p-[50px]">
                <div className="bg-[white] max-w-[248px] border-[3px] border-[black] p-[10px] rounded-[10px]">Mission & Vission</div>
                <div className="text-[48px] text-[#1A1A1A] text-center font-[700]">Our Mission & Vission</div>
                <div className="text-[16px] text-center max-w-[900px] text-[#333333]">We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.</div>
            </div>

            <div className="flex justify-center p-5 flex-wrap gap-10 ">
                {MissionCard.map((props) => {
                    return (
                        <div id={props.id}
                            className="bg-white rounded-[10px] px-[70px] max-w-[650px] py-[30px] border-[3px] border-[black]" style={{ boxShadow: "4px 4px 0px black" }}>
                            <div className="flex justify-between items-center ">
                                <div className="text-[38px] font-[700] text-[#1A1A1A]">{props.title}</div>
                                <div className="text-[38px] font-[700] text-[#1A1A1A]">
                                    <i className={props.icon}></i>
                                </div>

                            </div>
                            <p className="mt-10 text-[16px] text-[#333333]">{props.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Mission
