import React from 'react'


const ClassRoom = [
    { id: 1, image: "/images/gallery.png" },
    { id: 2, image: "/images/gallery.png" },
    { id: 3, image: "/images/gallery.png" },
    { id: 4, image: "/images/gallery.png" },
    { id: 5, image: "/images/gallery.png" }
]
const Library = [
    { id: 1, image: "/images/gallery.png" },
    { id: 2, image: "/images/gallery.png" },
    { id: 3, image: "/images/gallery.png" },
    { id: 4, image: "/images/gallery.png" },
    { id: 5, image: "/images/gallery.png" }
]
const ScienceLab = [
    { id: 1, image: "/images/gallery.png" },
    { id: 2, image: "/images/gallery.png" },
    { id: 3, image: "/images/gallery.png" },
    { id: 4, image: "/images/gallery.png" },
    { id: 5, image: "/images/gallery.png" }
]
const ComputerLab = [
    { id: 1, image: "/images/gallery.png" },
    { id: 2, image: "/images/gallery.png" },
    { id: 3, image: "/images/gallery.png" },
    { id: 4, image: "/images/gallery.png" },
    { id: 5, image: "/images/gallery.png" }
]
const Garden = [
    { id: 1, image: "/images/gallery.png" },
    { id: 2, image: "/images/gallery.png" },
    { id: 3, image: "/images/gallery.png" },
    { id: 4, image: "/images/gallery.png" },
    { id: 5, image: "/images/gallery.png" }
]

const Gallery = () => {
    return (
        <div className="lg:px-[80px] px-[20px]">
            <div className="flex flex-col items-center justify-center mt-10 space-y-[10px] lg:p-[50px]">
                <div className="bg-[white] max-w-[248px] border-[3px] border-[black] p-[10px] rounded-[10px]">Our Gallery</div>
                <div className="text-[48px] text-[#1A1A1A] text-center font-[700]">Our Rooms Gallery</div>
                <div className="text-[16px] text-center  max-w-[900px] text-[#333333]">Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.</div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-[white] text-[16px] text-[#1A1A1A] font-[600] py-[10px] px-[20px] border-[2px] border-[black] rounded-lg">All</button>
                <button className="bg-[white] text-[16px] text-[#1A1A1A] font-[600] py-[10px] px-[20px] border-[2px] border-[black] rounded-lg">Classrooms</button>
                <button className="bg-[white] text-[16px] text-[#1A1A1A] font-[600] py-[10px] px-[20px] border-[2px] border-[black] rounded-lg">Library</button>
                <button className="bg-[white] text-[16px] text-[#1A1A1A] font-[600] py-[10px] px-[20px] border-[2px] border-[black] rounded-lg">Science Lab</button>
                <button className="bg-[white] text-[16px] text-[#1A1A1A] font-[600] py-[10px] px-[20px] border-[2px] border-[black] rounded-lg">Computer Lab</button>
                <button className="bg-[white] text-[16px] text-[#1A1A1A] font-[600] py-[10px] px-[20px] border-[2px] border-[black] rounded-lg">Guarden and Nature Area</button>
            </div>
            <div className="relative mt-[200px] px-[50px] rounded-lg border-[black] border-[2px] bg-[white]" style={{ boxShadow: "4px 4px 0px black" }}>
                <div className="flex overflow-x-scroll no-scrollbar max-w-[300px] md:max-w-[800px] lg:max-w-[1250px] -top-28  absolute gap-14 ">
                    {ClassRoom.map((props) => {
                        return (
                            <div className="w-[270px]" key={props.id}>
                                <img className="min-w-[270px]" src={props.image} alt="" />
                            </div>
                        )
                    })}
                </div>
                <div className="pb-[50px] pt-[150px]" >
                    <div className="flex lg:justify-between justify-center flex-wrap items-center" >
                        <h3 className="text-[34px] text-[#1A1A1A] font-[600] ">Classrooms</h3>
                    </div>
                    <p className="text-[20px] text-center lg:text-start text-[#4C4C4D] mt-[50px]">Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.</p>
                </div>
            </div>
            <div className="relative mt-[200px] px-[50px] rounded-lg border-[black] border-[2px] bg-[white]" style={{ boxShadow: "4px 4px 0px black" }}>
                <div className="flex overflow-x-scroll no-scrollbar max-w-[300px] md:max-w-[800px] lg:max-w-[1250px] -top-28  absolute gap-14 ">
                    {ClassRoom.map((props) => {
                        return (
                            <div className="w-[270px]" key={props.id}>
                                <img className="min-w-[270px]" src={props.image} alt="" />
                            </div>
                        )
                    })}
                </div>
                <div className="pb-[50px] pt-[150px]" >
                    <div className="flex lg:justify-between justify-center flex-wrap items-center" >
                        <h3 className="text-[34px] text-[#1A1A1A] font-[600] ">Classrooms</h3>
                    </div>
                    <p className="text-[20px] text-center lg:text-start text-[#4C4C4D] mt-[50px]">Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.</p>
                </div>
            </div>
            <div className="relative mt-[200px] px-[50px] rounded-lg border-[black] border-[2px] bg-[white]" style={{ boxShadow: "4px 4px 0px black" }}>
                <div className="flex overflow-x-scroll no-scrollbar max-w-[300px] md:max-w-[800px] lg:max-w-[1250px] -top-28  absolute gap-14 ">
                    {ClassRoom.map((props) => {
                        return (
                            <div className="w-[270px]" key={props.id}>
                                <img className="min-w-[270px]" src={props.image} alt="" />
                            </div>
                        )
                    })}
                </div>
                <div className="pb-[50px] pt-[150px]" >
                    <div className="flex lg:justify-between justify-center flex-wrap items-center" >
                        <h3 className="text-[34px] text-[#1A1A1A] font-[600] ">Classrooms</h3>
                    </div>
                    <p className="text-[20px] text-center lg:text-start text-[#4C4C4D] mt-[50px]">Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.</p>
                </div>
            </div>
            <div className="relative mt-[200px] px-[50px] rounded-lg border-[black] border-[2px] bg-[white]" style={{ boxShadow: "4px 4px 0px black" }}>
                <div className="flex overflow-x-scroll no-scrollbar max-w-[300px] md:max-w-[800px] lg:max-w-[1250px] -top-28  absolute gap-14 ">
                    {ClassRoom.map((props) => {
                        return (
                            <div className="w-[270px]" key={props.id}>
                                <img className="min-w-[270px]" src={props.image} alt="" />
                            </div>
                        )
                    })}
                </div>
                <div className="pb-[50px] pt-[150px]" >
                    <div className="flex lg:justify-between justify-center flex-wrap items-center" >
                        <h3 className="text-[34px] text-[#1A1A1A] font-[600] ">Classrooms</h3>
                    </div>
                    <p className="text-[20px] text-center lg:text-start text-[#4C4C4D] mt-[50px]">Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.</p>
                </div>
            </div>
            <div className="relative mt-[200px] px-[50px] rounded-lg border-[black] border-[2px] bg-[white]" style={{ boxShadow: "4px 4px 0px black" }}>
                <div className="flex overflow-x-scroll no-scrollbar max-w-[300px] md:max-w-[800px] lg:max-w-[1250px] -top-28  absolute gap-14 ">
                    {ClassRoom.map((props) => {
                        return (
                            <div className="w-[270px]" key={props.id}>
                                <img className="min-w-[270px]" src={props.image} alt="" />
                            </div>
                        )
                    })}
                </div>
                <div className="pb-[50px] pt-[150px]" >
                    <div className="flex lg:justify-between justify-center flex-wrap items-center" >
                        <h3 className="text-[34px] text-[#1A1A1A] font-[600] ">Classrooms</h3>
                    </div>
                    <p className="text-[20px] text-center lg:text-start text-[#4C4C4D] mt-[50px]">Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.</p>
                </div>
            </div>
        </div>
    )
}

export default Gallery
