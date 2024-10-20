import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div className='w-full py-32 bg-[#004d43] rounded-t-3xl'>
        <div className="text border-t-[1px] border-b-[1px] border-zinc-300 flex  overflow-hidden whitespace-nowrap">
            <motion.h1 intial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:12}}className='text-[25vw] leading-none tracking-tighter font-["Founders_Grotesk] font-bold -mt-14 '>WE ARE OCHI</motion.h1>
            <motion.h1 intial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:12}}className='text-[25vw] leading-none tracking-tighter font-["Founders_Grotesk] font-bold -mt-14'> WE ARE OCHI</motion.h1>
            
        </div>
      
    </div>
  )
}

export default Marquee
