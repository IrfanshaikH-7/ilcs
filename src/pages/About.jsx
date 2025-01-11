import { main } from 'framer-motion/client'
import React from 'react'
import { about_1, about_2, about_3, logo, logo_short } from '../assets'
import ContentSection from '../components/home/ContentSection'

export default function About() {
  return (
    <main className='h-full flex flex-col gap-12  py-28 px-4 xl:max-w-[90%] mx-auto' >
        <div className=" w-full">
      <h1 className="text-5xl font-semibold">INDIAN LABOUR COOPRATIVE SOCIETY </h1>
      <p className='md:text-base text-neutral-700 text-sm'>Delivering quality services through skilled manpower and innovative technology for diverse projects since 1994.</p>

      <div className='h-44 w-full bg-slate-700 rounded-xl overflow-hidden mt-6'>
        <img src={about_1} alt="" className='object-cover h-full w-full object-center' />
      </div>
      <article className='flex mt-4 w-full gap-8 items-center h-fit'>
        <div className='text-neutral-700 md:text-base  text-sm w-full space-y-3 text-justify'>
        <p>
        <b>Indian Labour Cooperative Society Ltd. (ILCS)</b> was established in 1994 as a Multi-State Cooperative Society, operating under the Ministry of Cooperation, Government of India. Over the past 30 years, we have been committed to providing high-quality services to various Government, Semi-Government, and Private Authorities by undertaking diverse projects and deploying skilled, semi-skilled, and unskilled manpower.
        </p>
        <p>
        Our extensive experience includes successful collaborations with departments such as the Income Tax Department, Ministry of Petroleum & Natural Gas, Ministry of Micro, Small, and Medium Enterprises (MSME), and the Quality Council of India. From 2002 to 2008, we notably served the Indian Potash Limited (IPL) for its rake handling and warehousing needs in the challenging terrain of Jammu & Kashmir. In recent years, we have expanded our expertise by providing IPL with advanced agricultural drones and training IPL personnel as DGCA-approved drone pilots.
        </p>
        <p>
        We pride ourselves on offering state-of-the-art Smart Agriculture Drone Solutions, facilitating efficient spraying of fertilizers, insecticides, and pesticides. Our services help Indian farmers save time and labor, reduce health hazards, increase crop yields, and improve crop health management and field planning. By deploying over 50 Type Certified Agriculture Spray Drones with RPC-certified pilots across India, we also create valuable employment opportunities.
        </p>
        <p>
        ILCS is registered with MSME and adheres to the ISO 9001:2015 management system standards.
        </p>

        <button className='bg-green-200  rounded-3xl px-8 py-4 w-fit font-medium text-black text-sm hover:bg-green-200/80 hover:translate-x-2 hover:-rotate-1 hover:scale-105 transition-all duration-300'>Know more</button>

        </div>

        <div className='hidden lg:block lg:max-w-[30%] w-full bg-black aspect-[6/7]'>
        <img src={logo_short} alt="" className='object-cover h-full w-full' />
        </div>
      
      </article>

      <div>
      
      </div>
    </div>

    <article className='w-full'>
    <div className='h-44 lg:h-80 w-full  mx-auto rounded-xl overflow-hidden border relative bg-[#ebeef2]'>
      <img src={about_2} alt="india" className='h-full w-auto object-cover' />
    </div>
    <div className='flex gap-8 mt-2 lg:mt-8'>
      
    <div className='w-[30%] min-w-[30%]  h-full mx-auto hidden lg:block rounded-xl overflow-hidden border relative'>
      <img src={about_3} alt="india" className='h-auto  w-full object-cover' />
    </div>
    <div>
    <h2 className='text-3xl lg:text-5xl font-semibold '>Our mission</h2>
    <p className='md:text-base text-neutral-700 text-sm  mt-2'>Our mission is to empower the labor force by providing them with quality-based services and opportunities for skill development, ensuring their safety, and enhancing their socio-economic conditions. We aim to support various sectors through innovative solutions and dedicated manpower, contributing to the nation's growth and development.</p>
    <button className='bg-green-200 mt-3 rounded-3xl px-8 py-4 w-fit font-medium text-black text-sm hover:bg-green-200/80 hover:translate-x-2 hover:-rotate-1 hover:scale-105 transition-all duration-300'>Know more</button>
    </div>
    </div>
  
    </article>
    </main>
  
  )
}
