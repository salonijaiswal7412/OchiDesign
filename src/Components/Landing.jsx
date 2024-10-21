import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

function Landing() {
    
  return (
    <div data-scroll data-scroll-speed="-.4" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-40 px-16">

            {["We Create","Eye-opening","Presentations"].map((item,index)=>{
                return <div className="masker font-['Founders Grotesk'] overflow-hidden">
                <div className="w-fit flex items-center ">
                {index==1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}}  className='w-[9vw] h-[5.8vw] bg-green-500 mt-[1vw] mr-[1vw] rounded-md overflow-hidden'><img className='h-full' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /></motion.div>)}
                <h1 key={index} className='text-[8vw] font-bold uppercase leading-[7vw] tracking-tighter'>{item}</h1>
                </div>
                </div>

            })}
            
                
            
            
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-3 px-16 '>
            {["For public  and private companies","From the first pitch to IPO"].map((item,index)=>{
                return <p className='text-lg font-light tracking-tight leading-none '>{item}</p>
            })}
            <div className="start flex items-center gap-2">
                <div className="px-5 py-1 border-[1.5px] border-zinc-400 font-light text-md capitalize  rounded-full">START THE PROJECT</div>
                <div className="w-9 h-9 flex items-center justify-center  rounded-full border-[1px] border-zinc-400"><span className='rotate-[45deg]'><FaArrowUp /></span></div>
            </div>
        </div>
    </div>
  )
}

export default Landing
