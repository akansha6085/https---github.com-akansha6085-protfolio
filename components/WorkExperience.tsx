import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function WorkExperience({}: Props) {
    return (
        <motion.div 
        initial={{
            y:-100,
            opacity:0
          }}
      transition={{
          duration:1.2
      }}
      whileInView={{
          opacity:1,y:0
      }}
        className=' flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            
            <h3
            className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
               experience
                </h3>
<div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-mandatory  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-yellow-600 scrollbar-thin'>
<ExperienceCard/>
<ExperienceCard/>
<ExperienceCard/>
<ExperienceCard/>


</div>
    
            </motion.div>
  )
}

