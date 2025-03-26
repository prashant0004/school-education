import React, { useState, useEffect } from 'react';

const AwardsData = [
    {
        id: 1,
        icon: "fa-solid fa-chart-simple",
        title: "Outstanding Early Childhood Education Award",
        description: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    },
    {
        id: 2,
        icon: "fa-solid fa-chart-simple",
        title: "Best Innovative Teaching Award",
        description: "Awarded for pioneering modern teaching methodologies that enhance early learning experiences.",
    },
    {
        id: 3,
        icon: "fa-solid fa-chart-simple",
        title: "Excellence in Child Development",
        description: "Recognized for our outstanding programs promoting holistic child growth and development.",
    },
    {
        id: 4,
        icon: "fa-solid fa-chart-simple",
        title: "Parent's Choice Award",
        description: "Voted by parents as one of the best preschools for child safety, education, and environment.",
    },
    {
        id: 5,
        icon: "fa-solid fa-chart-simple",
        title: "Best Preschool Curriculum",
        description: "Awarded for our unique, research-backed curriculum designed for early childhood learning.",
    },
];

const Awards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    useEffect(() => {
        const updateVisibleCards = () => {
            if (window.innerWidth >= 1024) {
                setVisibleCards(3);
            } else if (window.innerWidth >= 768) {
                setVisibleCards(2);
            } else {
                setVisibleCards(1);
            }
        };

        updateVisibleCards();
        window.addEventListener("resize", updateVisibleCards);
        return () => window.removeEventListener("resize", updateVisibleCards);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? AwardsData.length - visibleCards : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex >= AwardsData.length - visibleCards ? 0 : prevIndex + 1));
    };

    return (
        <div className="px-[80px]">
            <div className="flex flex-col items-center justify-center mt-10 space-y-[10px] lg:p-[50px]">
                <div className="bg-[white] max-w-[248px] border-[3px] border-[black] p-[10px] rounded-[10px]">Our Awards</div>
                <div className="text-[48px] text-[#1A1A1A] text-center font-[700]">Our Awards and Recognitions</div>
                <div className="text-[16px] text-center max-w-[900px] text-[#333333]">
                    Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students.
                </div>
            </div>

            <div className="flex mt-[50px] gap-10 overflow-x-hidden py-2">


                <div className="flex py-5 gap-5 transition-transform duration-500 ease-in-out"
                

                    style={{ transform: `translateX(-${currentIndex * (20 / visibleCards)}%)`, width: `${AwardsData.length * (100 / visibleCards)}%` }}>
                    {AwardsData.map((data) => (
                        <div key={data.id} className="bg-[white] relative w-[400px] rounded-[10px] lg:p-[40px] p-[10px] border-[3px] border-[black]"
                            style={{ boxShadow: "4px 4px 0px black" }}>
                            <div className="px-[20px] absolute -top-6 left-7 bg-[#FFDECC] py-[10px] rounded-[10px] border-[2px] border-[black] w-[55px]">
                                <i className={data.icon}></i>
                            </div>
                            <div className="mt-[20px] text-[24px] font-[700] text-[#1A1A1A]">{data.title}</div>
                            <p className="text-[16px] text-[#4C4C4D] mt-5">{data.description}</p>
                        </div>
                    ))}
                </div>

            </div>

            <div className="flex lg:flex-row flex-col gap-4 lg:justify-between mt-10">
                <div className="ml-2 font-[700] text-[#1A1A1A]">More Awards</div>
                <div className="flex gap-5">
                    <button onClick={prevSlide} className="px-3 py-2 bg-white text-black transition-transform duration-500 hover:bg-[#FFA15A] rounded-xl">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button onClick={nextSlide} className="px-3 py-2 bg-white text-black transition-transform duration-500 hover:bg-[#FFA15A] rounded-xl">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Awards;
