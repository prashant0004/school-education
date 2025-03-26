import React from 'react'
const FeeTable = [
    { id: 1, attribute: "Program", value1: "Nursery", value2: "Pre - Kindergartens", value3: "Kindergarten", },
    { id: 2, attribute: "Age Group", value1: "2 - 3 Years", value2: "3 - 4 Years", value3: "4 - 5 Years", },
    { id: 3, attribute: "Annual Tution", value1: "$1,686", value2: "$2,686", value3: "$3,686", },
    { id: 4, attribute: "Registration Fee", value1: "$162", value2: "$220", value3: "$340", },
    { id: 5, attribute: "Activity Fee", value1: "$12", value2: "$16", value3: "$20", },
]
const Service = [
    { id: 1, value1: "Nursery", value2: "Pre - Kindergartens", value3: "Kindergarten", },
    { id: 2, value1: "2 - 3 Years", value2: "3 - 4 Years", value3: "4 - 5 Years", },
    { id: 3, value1: "$1,686", value2: "$2,686", value3: "$3,686", },
    { id: 4, value1: "$162", value2: "$220", value3: "$340", },
    { id: 5, value1: "$12", value2: "$16", value3: "$20", },
]

const FeeStructure = () => {
    return (
        <div className="flex flex-col overflow-x-hidden  items-center">
            <div className="flex flex-col items-center justify-center mt-10 space-y-[10px] lg:p-[50px]">
                <div className="bg-[white] max-w-[248px] border-[3px] border-[black] p-[10px] rounded-[10px]">Our Features</div>
                <div className="text-[48px] text-[#1A1A1A] text-center font-[700]">Fee Structure</div>
                <div className="text-[16px] text-center  max-w-[900px] text-[#333333]">Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen.</div>
            </div>
            <div className="flex justify-start lg:overflow-x-hidden overflow-x-scroll mt-16 bg-[white] py-12 px-[500px] lg:px-[100px] rounded-xl border-[black] border-[3px]   w-[1280px]">
                {FeeTable.map((fee) => {
                    return (
                        <div key={fee.id} className=" ">
                            <div className="">
                                <div className="bg-[#f1a88e] border border-black  w-[220px] px-8 text-[20px] font-[600] text-[#262626] py-6">{fee.attribute}</div>
                            </div>
                            <div className="bg-[#FFEFE5]  mt-[50px]">
                                <div className="px-8 py-5 border border-black">{fee.value1}</div>
                                <div className="px-8 py-5 border border-black">{fee.value2}</div>
                                <div className="px-8 py-5 border border-black">{fee.value3}</div>
                            </div>

                        </div>


                    )
                })}
            </div>
            <div className="flex flex-col justify-start lg:overflow-x-hidden overflow-x-scroll mt-16 bg-[white] py-12 px-[500px] lg:px-[100px] rounded-xl border-[black] border-[3px]   w-[1280px]">
                <div className="bg-[#f1a88e] border border-black text-[20px] font-[600] text-[#262626] w-[1100px] px-8 py-6">Additional Services</div>
                <div className="flex justify-start w-[1100px]">
                    {Service.map((fee) => {
                        return (

                            <div key={fee.id} className="w-[1100px] ">

                                <div className="bg-[#FFEFE5]  mt-[50px]">
                                    <div className="px-8 py-5 border border-black">{fee.value1}</div>
                                    <div className="px-8 py-5 border border-black">{fee.value2}</div>
                                    <div className="px-8 py-5 border border-black">{fee.value3}</div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>


        </div>
    )
}

export default FeeStructure
