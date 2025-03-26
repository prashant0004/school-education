import React from 'react'
import Activities from '../StudentsComponents/Activities'
import Events from '../StudentsComponents/Events'
import Header from '../StudentsComponents/Header'
import Support from '../StudentsComponents/Support'

const Students = () => {
  return (
    <div className="py-5 overflow-x-hidden bg-[#FFF5F0]">
      <Header />
      <Activities />
      <Events />
      <Support />
    </div>
  )
}

export default Students


