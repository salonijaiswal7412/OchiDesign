import React from 'react'
import Eyes from './Eyes'

function Ready() {
  return (
    <div  data-scroll data-scroll-speed="0.4"className='w-full min-h-screen bg-[#CDEA68] mt-10 rounded-t-2xl p-16'>
        <h1 className='font-[Founders Grotesk] leading-none uppercase text-zinc-900 w-[70vw] m-auto text-[10vw] font-bold text-center tracking-tighter'>ready to start the project?</h1>
        
        <button className='px-6  py-3 rounded-full flex gap-10 items-center text-lg uppercase text-zinc-100  bg-zinc-900 mt-8 mx-auto '> Start the Project
                        <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
                    </button>
      
    </div>
  )
}

export default Ready
