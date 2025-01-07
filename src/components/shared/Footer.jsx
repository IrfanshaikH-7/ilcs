import { section } from 'framer-motion/client'
import React from 'react'
import { logo } from '../../assets'


export default function Footer() {
  return (
    <footer className='p-2'>


    <main className='bg-black h-full md:h-60 py-4 md:py-8 flex-col md:flex-row flex items-start md:items-center justify-between px-4 md:px-20 rounded-xl'>
      {/* logo */}
     <div className='flex w-full md:w-auto flex-col items-start justify-center'>
      <section className='text-4xl w-full md:w-auto font-bold flex items-center flex-row'>
      <div className=' mt-2 flex flex-col w-full '>
        <div className='h-full md:h-20 w-full relative md:w-60 py-2 px-2 bg-white rounded-lg items-center justify-center flex'>
     <img src={logo} alt="logo" className='w-auto object-contain  md:h-full' /> 

        </div>
        <span className='text-orange-500 text-center md:text-left mt-2'>lorem ipsum</span>
        </div>
      </section>
    
     </div>
     {/* quick links */}
     <div className=' flex gap-8 md:gap-4 xl:gap-28 md:px-4 xl:px-24 flex-row flex-wrap md:flex-nowrap items-start py-8 md:py-0'>

   
     <div className='flex flex-col items-start justify-center w-fit min-w-fit '>
      <h1 className='text-white text-2xl font-bold flex items-center flex-row'>
      <div className='text-white break-keep'>links</div>
      </h1>
      <p className='text-neutral-400 text-sm hover:underline max-w-sm'>Services</p>
      <p className='text-neutral-400 text-sm hover:underline max-w-sm'>Products</p>
      <p className='text-neutral-400 text-sm hover:underline max-w-sm'>FAQ</p>
     </div>
     {/* another */}
     <div className='flex flex-col items-start justify-center w-fit min-w-fit'>
      <h1 className='text-white text-2xl font-bold flex items-center flex-row'>
      <div className='text-white'>Quick links</div>
      </h1>
      <p className='text-neutral-400 text-sm hover:underline max-w-sm'>Services</p>
      <p className='text-neutral-400 text-sm hover:underline max-w-sm'>Products</p>
      <p className='text-neutral-400 text-sm hover:underline max-w-sm'>FAQ</p>
     </div>
     {/* ok */}
     <div className='flex flex-col gap-4 items-start justify-center w-full '>
      <h1 className='text-white  font-bold flex items-center flex-row'>
      <div className='text-white'>Indian Labour Cooperative Society Ltd.</div>
      </h1>
      <div className='flex flex-col md:flex-row w-full gap-2'>
        <input type="text" placeholder='Email' className='text-neutral-400 text-sm bg-transparent border-b-2 border-neutral-400 outline-none w-full' />
        <button className='bg-green-200 text-black text-sm px-4 py-2 rounded-md'>Enquiry</button>
      </div>
     
     </div>
       </div>
    </main>
    
    </footer>
  )
}
