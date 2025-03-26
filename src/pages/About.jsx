import React from 'react'
import Header from '../AboutComponents/Header'
import Mission from '../AboutComponents/Mission'
import Awards from '../AboutComponents/Awards'
import OurHistory from '../AboutComponents/OurHistory'
import OurTeam from '../AboutComponents/OurTeam'

const About = () => {
  return (
    <div className="overflow-x-hidden py-5 bg-[#FFF5F0]">
      <Header />
      <Mission />
      <Awards />
      <OurHistory />
      <OurTeam />
    </div>
  )
}

export default About
