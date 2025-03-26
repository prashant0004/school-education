import React, { useState, useEffect } from 'react';

const CrouselContent = [
    {
        id: 1,
        name: "John Doe",
        icon: "text-[yellow] fa-solid fa-star",
        description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
        img: "/images/Icon.png"
    },
    {
        id: 2,
        name: "Jane Doe",
        icon: "text-[yellow] fa-solid fa-star",
        description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
        img: "/images/Icon.png",
    },
    {
        id: 3,
        name: "Alice Smith",
        icon: "text-[yellow] fa-solid fa-star",
        description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
        img: "/images/Icon.png",
    },
    {
        id: 4,
        name: "Bob Johnson",
        icon: "text-[yellow] fa-solid fa-star",
        description: "Amazing school with wonderful staff! My child loves going here and has improved so much!",
        img: "/images/Icon.png",
    },
    {
        id: 5,
        name: "Emma Brown",
        icon: "text-[yellow] fa-solid fa-star",
        description: "Great learning environment and supportive teachers. Highly recommend!",
        img: "/images/Icon.png",
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(1);

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
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? CrouselContent.length - visibleCards : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex >= CrouselContent.length - visibleCards ? 0 : prevIndex + 1));
    };

    return (
        <div className="flex flex-col items-center justify-center mt-10 space-y-[10px] p-[50px]">
            <div className="bg-[white] max-w-[248px] border-[3px] border-[black] p-[10px] rounded-[10px]">Their Happy Words 🤗</div>
            <div className="text-[48px] text-[#1A1A1A] text-center font-[700]">Our Testimonials</div>
            <div className="text-[16px] text-center max-w-[900px] text-[#333333]">Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.</div>

            <div className="flex items-center overflow-x-hidden  justify-start gap-4 mt-10 md:max-w-[800px] max-w-[350px] lg:max-w-[1200px] p-4">

                <div className="overflow-hidden  max-w-[1000px]">
                    <div className="flex transition-transform duration-500 py-2 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (20 / visibleCards)}%)`, width: `${CrouselContent.length * (100 / visibleCards)}%` }}>
                        {CrouselContent.map((data) => (
                            <div key={data.id} className="bg-[white] max-w-[300px] border-[3px] p-[20px] rounded-[10px] mx-2 flex-shrink-0"
                                style={{ boxShadow: "4px 4px 0px black", width: `calc(50% / ${visibleCards})` }}>
                                <div className="flex justify-center">
                                    <img src={data.img} className="bg-[#FFF5F0] p-3 rounded-full " />
                                </div> 
                                <div className="text-[16px] text-center text-[#333333] mt-3">{data.name}</div>
                                <div className="text-[16px] flex gap-2 justify-center text-[#333333] mt-4">
                                    {[...Array(5)].map((_, i) => (<i key={i} className={data.icon}></i>))}
                                </div>
                                <div className="text-[16px] text-center mt-4 text-[#333333]">{data.description}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div>
                {[...Array(Math.ceil(CrouselContent.length / visibleCards))].map((_, i) => (
                    <button key={i} onClick={() => setCurrentIndex(i)} className={`w-4 h-4 mx-2 rounded-full ${currentIndex === i ? "bg-[#FFA15A]" : "bg-[#E5E5E5]"}`}></button>
                ))}

            </div>
            <div className="flex items-center justify-center gap-4 mt-10">
                <button onClick={prevSlide} className="px-3 py-2 bg-white text-black transition-transform duration-500 hover:bg-[#FFA15A] rounded-xl"><i class="fa-solid fa-arrow-left"></i></button>
                <button onClick={nextSlide} className="px-3 py-2 bg-white text-black transition-transform duration-500 hover:bg-[#FFA15A] rounded-xl"><i class="fa-solid fa-arrow-right"></i></button>
            </div>

        </div>
    );
};

export default Testimonials;

