import React from 'react'
import ImageOverlay from '../components/shared/ImageOverlay'
import AboutMission from '../components/home/AboutMission'
import BharatEntrepreneurshipSubmit from '../components/home/BharatEntrepreneurshipSubmit'
import OurVision from '../components/home/OurVision'

const Home = () => {
  return (
    <main  className="relative w-full pl-2 pr-2">
      {/* First Section - Hero */}
      <section className="relative h-[57vh] min-[378px]:h-[59vh] min-[415px]:h-[65.5vh]  min-[550px]:h-[67.5vh] min-[580px]:h-[65.5vh] min-[665px]:h-[72.5vh] md:h-[97.5vh] w-full rounded-lg overflow-hidden mt-[100px]">
        {/* Image Overlay Container */}
        <div className="absolute inset-0 z-0 w-full aspect-video md:aspect-auto rounded-lg overflow-hidden">
          <ImageOverlay />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-end md:items-center">
          <div className="container mx-auto md:px-4">
            <h1 className=" md:max-w-4xl text-5xl md:text-7xl font-semibold     bg-gradient-to-br from-orange-500 from-10% via-480% via-gray-200 to-80% to-green-500 bg-clip-text text-transparent">Empowering communities through <span className="text-primary">Cooperative Efforts</span></h1>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section 
      className='min-h-fit py-7 space-y-16 sm:px-4 md:px-0 md:max-w-[90%] mx-auto'>
      <AboutMission />
      <BharatEntrepreneurshipSubmit />
      <OurVision />
      </section>
 
    </main>
  )
}

export default Home
