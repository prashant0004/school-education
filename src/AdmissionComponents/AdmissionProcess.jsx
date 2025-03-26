import React from 'react'

const Admission = [
    { id: 1, num: "01", title: "Inquiry", description: "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy." },
    { id: 2, num: "02", title: "Inquiry", description: "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy." },
    { id: 3, num: "03", title: "Inquiry", description: "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy." },
    { id: 4, num: "04", title: "Inquiry", description: "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy." },
    { id: 5, num: "05", title: "Inquiry", description: "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy." },
    { id: 6, num: "06", title: "Inquiry", description: "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy." },
]

const AdmissionProcess = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center mt-10 space-y-[10px] lg:p-[50px]">
                <div className="bg-[white] max-w-[248px] border-[3px] border-[black] p-[10px] rounded-[10px]">Process</div>
                <div className="text-[48px] text-[#1A1A1A] text-center font-[700]">Admission Process</div>
                <div className="text-[16px] text-center  max-w-[900px] text-[#333333]">Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school</div>
            </div>
            <div className="flex flex-wrap justify-center md:gap-20 lg:gap-20">
                {Admission.map((props) => {
                    return (
                        <div key={props.id} className="" >
                            <div className="bg-[white] w-[100px] border-[2px] border-[black] py-[15px] px-[20px] rounded-[15px]  " style={{ boxShadow: "4px 4px 0px black" }}>
                                <h2 className="text-[44px] text-[#1A1A1A] font-[800] ">{props.num}</h2>
                            </div>
                            <div className="h-[80px] w-[11px] relative bg-[#FFBE99] ml-12">
                                <div className="h-[80px] w-[5px] bg-[black] ml-[3px]"></div>
                                <div className="absolute -left-2 -top-4 bg-[white] border-[1px] border-[black] h-[30px] w-[30px] rounded-full"></div>
                            </div>
                            <div className="p-[40px] min-h-[260px] bg-[white] rounded-lg border-[black] border-[2px]" style={{ boxShadow: "4px 4px 0px black" }} >
                                <h3 className="text-[30px] font-[700] text-[#1A1A1A]">{props.title}</h3>
                                <p className="max-w-[300px] text-[16px] text-[#4C4C4D] mt-8">{props.description}</p>
                            </div>
                            <div className="h-[80px] lg:hidden md:hidden flex w-[11px]  bg-[#FFBE99] ml-12">
                                <div className="h-[80px] w-[5px] bg-[black] ml-[3px]"></div>
                            </div>
                        </div>
                        
                    )
                })}
            </div>
        </div>
    )
}

export default AdmissionProcess
