import React from 'react'
import Header from '../AcademicsComponents/Header'
import StudentsLearning from '../AcademicsComponents/StudentsLearning'
import Gallery from '../AcademicsComponents/Gallery'

const Academics = () => {
  return (
    <div className="overflow-x-hidden py-5 bg-[#FFF5F0]">
      <Header />
      <StudentsLearning />
      <Gallery />
    </div>
  )
}

export default Academics
