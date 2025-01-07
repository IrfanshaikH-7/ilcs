import React, { useEffect, useRef, useState } from 'react'
import ImageOverlay from '../components/shared/ImageOverlay'
import AboutMission from '../components/home/AboutMission'
import BharatEntrepreneurshipSubmit from '../components/home/BharatEntrepreneurshipSubmit'
import OurVision from '../components/home/OurVision'
import ContentSection from '../components/home/ContentSection'
import { firesafety, zed_logo } from '../assets'

const Home = () => {
  const overlayRef = useRef(null);
  const [overlayHeight, setOverlayHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const measureHeight = () => {
      if (overlayRef.current && window.innerWidth < 768) {
        setOverlayHeight(overlayRef.current.offsetHeight);
      } else {
        setOverlayHeight(0);
      }
      setIsMobile(window.innerWidth < 768);
    };

    // Initial measurement
    measureHeight();

    // Handle window resize
    window.addEventListener('resize', measureHeight);

    // Set up resize observer to track changes
    const resizeObserver = new ResizeObserver(measureHeight);
    if (overlayRef.current) {
      resizeObserver.observe(overlayRef.current);
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', measureHeight);
      if (overlayRef.current) {
        resizeObserver.unobserve(overlayRef.current);
      }
    };
  }, []);

  return (
    <main className="relative w-full pl-2 pr-2">
      {/* First Section - Hero */}
      <section 
        className={`relative h-[100%] w-full rounded-lg overflow-hidden mt-[100px] md:h-[97.5vh]`}
        style={{ paddingTop: isMobile ? `${overlayHeight}px` : 0 }}
      >
        {/* Image Overlay Container */}
        <div
          ref={overlayRef}
          className="absolute inset-0 z-0 w-full md:h-[86vh] aspect-video md:aspect-auto rounded-lg overflow-hidden">
          <ImageOverlay />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-end justify-start md:items-center">
          <div className="container md:px-4">
            <h1 className=" md:max-w-4xl text-5xl md:text-7xl font-semibold    bg-gradient-to-br from-orange-500 from-10% via-480% via-gray-200 to-80% to-green-500 bg-clip-text text-transparent">Empowering communities through <span className="text-primary">Cooperative Efforts</span></h1>
          </div>
        </div>
      </section>

      {/* Second Section */}

      




      <section
        className='min-h-fit py-7 space-y-[60px] md:px-0 xl:max-w-[90%] mx-auto'>
        <AboutMission />
        <BharatEntrepreneurshipSubmit />
        <OurVision />
        <section className='min-h-fit   sm:px-4 md:px-0    mx-auto flex flex-col md:flex-row gap-4 '>
        <div className='w-full md:w-1/2 flex flex-col gap-4'>
          <h1 className='text-3xl md:text-5xl font-bold'>Empowering Labour Through <br /> Cooperative <br className='hidden md:block'/> Efforts
          </h1>
          <div>
          <p className='text-sm md:text-base font-medium'>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </p>
          <p className='text-sm md:text-base font-medium'>Trusted by Government and Corporates</p>
          <p className='text-sm md:text-base font-medium'>Quality services in manpower and project management since 1994, supporting various government initiatives.
            
          </p>
          <button className='bg-black mt-3 rounded-3xl px-6 py-3 w-fit text-white text-sm hover:bg-black/80 hover:-rotate-1 hover:scale-105 transition-all duration-300'>Explore</button>

          </div>
         
        </div>
        <div className='w-full md:w-1/2'>
          <form action="" className='flex flex-col gap-4'>
            <div className='flex flex-col md:flex-row gap-4 w-full '>
            <div className='flex flex-col gap-0.5 flex-1'>
              <label htmlFor="name" className='text-sm  font-medium'>Name</label>
              <input type="text" placeholder='Name'
                className='text-[13px] font-medium  border border-gray-300 rounded-md p-2'
            />
            </div>
            <div className='flex flex-col gap-0.5 flex-1'>
            <label htmlFor="email" className='text-sm  font-medium'>Phone</label>
            <input type="text" placeholder='Phone'
              className='text-[13px] font-medium border border-gray-300 rounded-md p-2'
            />
            </div>
            </div>
         
            <div className='flex flex-col gap-0.5'>
            <label htmlFor="phone" className='text-sm  font-medium'>Skilled Manpower Services Provider</label>
            <textarea rows={3} type="text" placeholder='Enter your manpower services provider'
              className='text-[13px] font-medium border border-gray-300 rounded-md p-2'
            />
            </div>
              <div className='flex flex-col gap-0.5'>
            <label htmlFor="message" className='text-sm font-medium'>Message for Inquiry <span className='text-red-500'>*</span></label>
            <textarea rows={3} type="text" placeholder='Message'
              className='text-[13px] font-medium border border-gray-300 rounded-md p-2'
            />
            </div>
            <button type='submit' className='bg-black mt-4 max-w-md w-full mx-auto text-white px-4 py-2 rounded-3xl'  >Submit</button>
          </form>
        </div>


      
      
      
      
      
      
      
        </section>
        

        {/* services section */}
     <section  className='md:py-8 space-y-0'>
      {/* section header */}
  
     <div className='w-full py-8 h-full flex items-center justify-center'>
        <h2 className='text-3xl md:text-5xl font-bold w-full max-w-[340px]'>Our Services</h2>
        <div className='w-full h-1 rounded-full bg-black'/>
        </div>




     {/* first section in services */}
        <ContentSection
          title='Comprehensive Fire Safety Systems  '
          content='left'
          descriptions={['We supply and install advanced fire safety systems for residential, commercial, and industrial premises. Our offerings include fire suppressants, extinguishers, alarms, and detection systems. We ensure fire safety through regular maintenance, inspections, and training programs.',

            "Our solutions detect, alert, and suppress fires efficiently, minimizing damage. Our detection systems include smoke and heat detectors, integrated with control panels for prompt response. Additionally, we offer foam, gas, and powder-based fire suppressants from leading manufacturers, ensuring reliability in emergencies."
          ]}
          image={firesafety}
          button={'Know more about it'}
        />

        <div className='pt-12 lg:pt-0'>

        <ContentSection
          title='Empowering MSMEs with ZED Certification – A Key Initiative by ILCS'
          content='left'
          descriptions={"In today's competitive business landscape, Micro, Small, and Medium Enterprises (MSMEs) play a pivotal role in driving economic growth and job creation. However, to thrive in this environment, MSMEs need to adopt world-class practices in quality and sustainability. Recognizing this, the Indian Labour Cooperative Society (ILCS) has taken a significant step by partnering with the Ministry of Micro, Small, and Medium Enterprises (MSME) and the Quality Council of India (QCI) to promote the ZED (Zero Defect, Zero Effect) Certification Scheme."}
          image={zed_logo}
          button={'Know more about it'}
        />
        </div>
      </section>
      






     

      </section>

    

    </main>
  )
}

export default Home
