import React from 'react'
import { ministry_of_corporation, ministry_of_labour, msme, niti_aayog, zed_cert } from '../../assets'

export default function LogoFlex() {
  return (
    <section className='flex mt-0  md:-mt-12 pb-8 pt-4'>
      <div className='flex items-center justify-center flex-row flex-wrap gap-8 max-w-[1370px] mx-auto '>
        {[ ministry_of_labour, msme, niti_aayog, zed_cert, ministry_of_corporation].map((logo, index) => (
<div className='w-auto h-12 md:h-24  '>
    <img src={logo} alt="logo" className='w-auto object-contain h-full' /> 
</div>
        ))}
      </div>
    </section>
  )
}
