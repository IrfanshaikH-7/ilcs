'use client'  
import React from 'react'  
import { motion } from 'framer-motion'  

export default function ContentSection({
  SuperTitle,
  title,
  subTitle,
  descriptions,
  image,
  button,
  content,
  isSeparated
}) {  
  const isArray = Array.isArray(descriptions);
  const descriptionList = isArray ? descriptions : [descriptions];
  
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  return (  
    <div className="h-fit  min[900px]:px-4 max-w-full  w-full flex flex-col items-center justify-between gap-8  min-[900px]:flex-row mx-auto overflow-hidden">  
      {content !== 'right' && (
        <motion.article  
          variants={fadeUpVariants}  
          initial="hidden"  
          whileInView="visible"  
          viewport={{ once: true }}  
          className="flex-1 flex flex-col md:mt-0 max-w-full lg:max-w-2xl w-full lg:px-4 xl:pl-0 gap-2"  
        >  
          {SuperTitle && (
            <div className="relative w-fit flex flex-col">  
              <span className="group-hover:w-12 group-hover:opacity-100 h-1 opacity-0 w-0 transition-all duration-300 bg-black rounded-xl self-end" />  
              <h4 className="text-xl relative uppercase font-semibold text-neutral-600">{SuperTitle}</h4>  
              <span className="h-1 w-12 bg-black rounded-xl" />  
            </div> 
          )}
          {title && (
            <h2 className="text-2xl md:text-2xl lg:text-4xl text-neutral-900 font-bold">  
              {title} 
            </h2> 
          )}
          {subTitle && (
            <p className="text-neutral-900 text-base md:text-sm xl:text-lg">
              {subTitle}
            </p>
          )}
          {
          descriptions && descriptions.length <= 0 ? (
            <p className="text-neutral-600 text-sm xl:text-base">
              {descriptions}
            </p>
          ) : (
            descriptionList?.map((desc, idx) => (
              <p key={idx} className="text-neutral-600 text-sm xl:text-base">
                {desc}
              </p>
            ))
          )}

          {
            button && (
              <button className='bg-black mt-1 rounded-3xl px-6 py-3 w-fit text-white text-sm hover:bg-black/80 hover:-rotate-1 hover:scale-105 transition-all duration-300'>Know more about it</button>
            )
          }

        </motion.article> 
      )}
      <motion.div
        variants={fadeUpVariants}  
        initial="hidden"  
        whileInView="visible"  
        viewport={{ once: true }}  
        className="relative flex-1 aspect-[4/3] h-auto md:min-w-[400px] lg:min-w-[400px] md:max-w-[580px] lg:p-8 w-full bg-contain"  
      >
        <img  
          src={image}  
          alt="stock-pc-image"  
          className="object-cover w-full h-full rounded-md shadow-md overflow-hidden "  
        />  
      </motion.div>  

      {content === 'right' && (
        <motion.article  
          variants={fadeUpVariants}  
          initial="hidden"  
          whileInView="visible"  
          viewport={{ once: true }}  
          className="flex-1 flex flex-col mt-12 md:mt-0 max-w-2xl w-full lg:px-4 xl:pr-14 gap-2"  
        >  
          <div className="relative w-fit flex flex-col">  
            <span className="group-hover:w-12 group-hover:opacity-100 h-1 opacity-0 w-0 transition-all duration-300 bg-black rounded-xl self-end" />  
            <h4 className="text-xl relative uppercase font-semibold text-neutral-600">{SuperTitle}</h4>  
            <span className="h-1 w-12 bg-black rounded-xl" />  
          </div>  
          {title && (
            <h2 className="text-4xl md:text-2xl lg:text-4xl text-neutral-900 font-bold">  
              {title} 
            </h2> 
          )}
          {subTitle && (
            <p className="text-neutral-900 text-sm xl:text-lg">
              {subTitle}
            </p>
          )}
          {descriptions && descriptions.length <= 0 ? (
            <p className="text-neutral-600 text-sm xl:text-base">
              {descriptions}
            </p>
          ) : (
            descriptionList?.map((desc, idx) => (
              <p key={idx} className="text-neutral-600 text-base md:text-sm xl:text-base">
                {desc}
              </p>
            ))
          )}
          {
            button && (
              <button className='bg-black mt-1 rounded-3xl px-6 py-3 w-fit text-white text-sm hover:bg-black/80 hover:-rotate-1 hover:scale-105 transition-all duration-300'>Know more about it</button>
            )
          }

        </motion.article> 
      )}
    </div>  
  )  
} 