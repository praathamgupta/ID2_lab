"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
<motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          {/* <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> */}
         
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
          
A digital flowmeter is a sophisticated instrument designed to accurately measure the flow rate of various fluids within a system. Utilizing advanced sensors and electronic components, it provides precise readings in real-time, allowing for efficient monitoring and control of fluid processes.
 Unlike traditional mechanical flow meters, digital flowmeters offer enhanced reliability and versatility, often featuring customizable settings and output options. With their digital displays and intuitive interfaces, they facilitate easy interpretation of data, enabling operators to make informed decisions regarding fluid management. Whether used in industrial, commercial, or research applications, digital flowmeters play a crucial role in optimizing processes, ensuring operational efficiency, and maintaining quality standards.
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
           
        </motion.div>
    </div>
  )
}

export default SkillText