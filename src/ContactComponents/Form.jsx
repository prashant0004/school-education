import React from 'react'

const Form = () => {
    return (
        <div className="flex md:px-10 px-5 flex-col items-center">
            <div className="flex flex-col items-center justify-center mt-10 space-y-[10px] lg:p-[50px]">
                <div className="bg-[white] max-w-[248px] border-[3px] border-[black] p-[10px] rounded-[10px]">Contact Form</div>
                <div className="text-[48px] text-[#1A1A1A] text-center font-[700]">Student Information</div>
                <div className="text-[16px] text-center  max-w-[900px] text-[#333333]">If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs.</div>
            </div>
            <div className="max-w-[1350px] mt-10 bg-[white] border-[black] border-[3px]  rounded-[10px]"style={{ boxShadow: "4px 4px 0px black" }}>
                <form action="">
                    <div className="">
                        <div className="flex flex-wrap justify-center items-center gap-10 p-[50px]">
                            <label className="">
                                <div className="text-[16px] font-[600]">Parent Name</div>
                                <input type="text" className="lg:w-[600px] md:w-[400px] w-[280px] mt-[15px] bg-[#FFFCFA] border-[1px] border-[black] p-[20px] rounded-[5px]" placeholder="Enter parent name" />
                            </label>
                            <label className="">
                                <div className="text-[16px] font-[600]">Email Address</div>
                                <input type="email" className="lg:w-[600px] md:w-[400px] w-[280px] mt-[15px] bg-[#FFFCFA] border-[1px] border-[black] p-[20px] rounded-[5px]" placeholder="Enter email address" />
                            </label>
                            <label className="">
                                <div className="text-[16px] font-[600]">Phone Number</div>
                                <input type="tel" className="lg:w-[600px] md:w-[400px] w-[280px] mt-[15px] bg-[#FFFCFA] border-[1px] border-[black] p-[20px] rounded-[5px]" placeholder="Enter phone number" />
                            </label>
                            <label className="">
                                <div className="text-[16px] font-[600]">Student Name</div>
                                <input type="text" className="lg:w-[600px] md:w-[400px] w-[280px] mt-[15px] bg-[#FFFCFA] border-[1px] border-[black] p-[20px] rounded-[5px]" placeholder="Enter student name" />
                            </label>
                            <label className="">
                                <div className="text-[16px] font-[600]">Student Age</div>
                                <input type="number" className="lg:w-[600px] md:w-[400px] w-[280px] mt-[15px] bg-[#FFFCFA] border-[1px] border-[black] p-[20px] rounded-[5px]" placeholder="Enter student age" />
                            </label>
                            <label className="">
                                <div className="text-[16px] font-[600]">Program of Interest</div>
                                <select className="lg:w-[600px] md:w-[400px] w-[280px] mt-[15px] bg-[#FFFCFA] border-[1px] border-[black] p-[20px] rounded-[5px]">
                                    <option value="">Select a program</option>
                                    <option value="program1">Program 1</option>
                                    <option value="program2">Program 2</option>
                                    <option value="program3">Program 3</option>
                                </select>
                            </label>
                           
                            <div>
                            <label className="flex flex-col">
                                <div className="text-[16px] font-[600]">Message</div>
                                <textarea className=" lg:w-[1250px] md:w-[400px] w-[280px] mt-[15px] bg-[#FFFCFA] border-[1px] border-[black] p-[20px] rounded-[5px]" rows="4" placeholder="Enter your message"></textarea>
                            </label>
                                <button type="submit" className="bg-[#FFAE80] text-[black] border-[3px] border-[black] p-[20px] w-full mt-10 rounded-[5px] font-[600] hover:bg-[#b16d19]">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
