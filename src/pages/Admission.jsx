import React from 'react'
import Header from '../AdmissionComponents/Header'
import AdmissionProcess from '../AdmissionComponents/AdmissionProcess'
import FeeStructure from '../AdmissionComponents/FeeStructure'

const Admission = () => {
  return (
    <div className="lg:px-[80px] py-5 bg-[#FFF5F0]">
      <Header />
      <AdmissionProcess />
      <FeeStructure />
    </div>
  )
}

export default Admission
