import React from 'react'

export default function AboutMission() {
  return (
    <section className='space-y-20 mt-12 max-w-[1370px] mx-auto h-full'>
    <div className="flex h-full md:h-40 bg-white rounded-md  py-6 md:py-6 md:px-6 border shadow-lg gap-2  items-center relative justify-center mx-auto ">

      <h1 className='text-center text-base md:text-2xl font-bold bg-green-200 px-6 py-2 rounded-md absolute -top-8 left-1/2 -translate-x-1/2 w-full max-w-[240px]'>About Us</h1>
      <p className=" text-sm md:text-base text-center font-medium text-neutral-600 flex-[0.9]  ">
      Indian Labour Cooperative Society Ltd. is a organization dedicated to the empowerment and welfare of workforce accross  India. Established in 1994 with the vision of fostering economic and social growth for the labor community, our cooperative society operates on the principles of mutual aid, self-help, and collective responsibility <a href="/" className='text-orange-500 hover:underline'>Know more about ilcs</a></p>
    </div>


    <div className="flex h-full md:h-40 bg-white rounded-md py-6 md:py-6 md:px-6 border shadow-lg gap-2 text-center items-center relative  justify-center mx-auto ">

<h1 className='text-center text-base md:text-2xl font-bold bg-green-200 px-6 py-2 rounded-md absolute -top-8 left-1/2 -translate-x-1/2 break-keep w-full max-w-[240px]'>Our Mission</h1>
<p className=" text-sm md:text-base text-center font-medium text-neutral-600 flex-[0.9]  ">
The Indian Labour Cooperative Society Ltd. aims to provide a collective voice to workers, ensuring they receive fair treatment and opportunities for growth. We believe in the power of unity and cooperation to bring about positive change in the labor sector.<a href="/" className='text-orange-500 hover:underline'>Read more</a>

</p>
</div>
  </section>
  )
}
