import React from 'react'
import Hero from '../components/Hero'
import '../App.css'
import Benifits from '../components/Benifits'
import Testimonials from '../components/Testimonials'
import AskedQuestion from '../components/AskedQuestion'
import Navigate from '../components/Navigate'

const Home = () => {
  return (
    <div className="overflow-x-hidden py-5 bg-[#FFF5F0]">
    <Hero />
    <Benifits />
    <Testimonials />
    <AskedQuestion />
    <Navigate />
   </div>
  
  )
}

export default Home
