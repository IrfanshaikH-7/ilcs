import React from 'react'
import { bharat_entrepreneurship, eia_logo } from '../../assets'

export default function BharatEntrepreneurshipSubmit() {
  return (
    <section className='min-h-fit flex mx-auto md:flex-row flex-col'>
      <div className='flex-1 flex justify-center items-center'>
        <img src={eia_logo} alt="bharat-entrepreneurship" className='w-full aspect-video object-cover' />
      </div>
      <div className='flex-1 flex flex-col justify-center items-center'>
      <img src={bharat_entrepreneurship} alt="bharat-entrepreneurship" className='w-auto h-36 md:h-40 lg:h-60 object-contain' />

        <div className='flex flex-col gap-4 max-w-xl  mx-auto'>
        <h2 className='md:text-xl text-sm text-center  font-semibold'>( 6th September, 2024 | Venue : NDMC Convention Centre, New Delhi)
        </h2>
        <button className='bg-orange-500 max-w-fit md:max-w-full mx-auto font-semibold text-white px-4 py-3 rounded-md hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-rotate-[0.5deg] hover:shadow-orange-500'>Click Here to Register</button>
        <p className='text-xs md:text-sm text-center -mt-2 font-medium text-neutral-600'>
        For any queries - Contact : +91 98219 11055, 
        </p>
        </div>
        </div>
      
    </section>
  )
}
