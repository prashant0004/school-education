import React from 'react'
import { useState } from 'react'


// const description = `${answer.substring(0,100)}`

const AskedQuestion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const QuestionData = [
        { question: "What is the admission process?", icon: "fa-solid fa-plus", answer: "We have a simple 3-step admission process. First, you need to fill out the application form. Then, we will schedule a meeting with you and your child. Finally, we will inform you about the admission decision." },
        { question: "What is the fee structure?", icon: "fa-solid fa-plus", answer: "Our fees are competitive and vary depending on the program you choose. Please contact us for more information." },
        { question: "What are the school timings?", icon: "fa-solid fa-plus", answer: "Our school timings are from 8:00 AM to 2:00 PM." },
        { question: "What is the student-teacher ratio?", icon: "fa-solid fa-plus", answer: "Our student-teacher ratio is 10:1, which ensures that each child receives individual attention." },
        { question: "What extracurricular activities do you offer?", icon: "fa-solid fa-plus", answer: "We offer a wide range of extracurricular activities, including sports, music, dance, and art." },
        { question: "Do you provide transportation facilities?", icon: "fa-solid fa-plus", answer: "Yes, we provide transportation facilities for students living in the vicinity of the school." },
        { question: "What is the admission process?", icon: "fa-solid fa-plus", answer: "We have a simple 3-step admission process. First, you need to fill out the application form. Then, we will schedule a meeting with you and your child. Finally, we will inform you about the admission decision." },
        { question: "What is the fee structure?", icon: "fa-solid fa-plus", answer: "Our fees are competitive and vary depending on the program you choose. Please contact us for more information." },
    ]
    return (
        <div className="flex flex-col items-center justify-center mt-10 space-y-[10px] p-[50px]">
            <div className="bg-[white] max-w-[248px] border-[3px] border-[black] p-[10px] rounded-[10px]">Solutions For The Doubts</div>
            <div className="text-[48px] text-[#1A1A1A] text-center font-[700]">Frequently Asked Questions</div>
            <div className="text-[16px] text-center max-w-[900px] text-[#333333]">Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.</div>
            <div className="flex flex-wrap gap-5 justify-center" style={{ marginTop: "50px" }}>
                {QuestionData.map((data, index) => {
                    return (
                        <div key={index} className="bg-[white] border-[3px] lg:w-[600px] max-w-[600px]  relative mt-3 border-[black] p-[30px] rounded-[10px] ">
                            <div className="flex items-center gap-2 justify-between">
                                <div className="text-[24px] text-[#1A1A1A] font-[700]">{data.question}</div>
                                <button onClick={() => toggleAnswer(index)} className="bg-[#FFF5F0] py-2 px-3 border-[black] border rounded-lg">  <i className={data.icon} ></i></button>
                            </div>
                            {openIndex === index && (
                                <div>
                                    <div className="max-w-[540px] h-[2px] mt-4 bg-[black]"></div>
                                    <div className="text-[16px] text-[#333333] mt-3">{data.answer}</div>
                                </div>
                            )}
                        </div>
                    )})}
            </div>
        </div>
    )
}

export default AskedQuestion
