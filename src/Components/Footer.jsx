import React from 'react'

const Footer = () => {
  return (
    <div data-scroll data-scroll-speed="-0.3"className='bg-zinc-900 w-full h-screen flex mt-32'>
        <div className="heading mx-16 w-1/2 relative">
            <h1 className='text-8xl -mb-6 tracking-tighter font-[Founders Grotesk] font-bold'>EYE-</h1>
            <h1 className='text-8xl -mb-6 tracking-tighter font-[Founders Grotesk] font-bold'>OPENING</h1>
            <div className="email absolute bottom-2 left-2 text-lg ">hello@ochi.design</div>

        </div>
        <div className="w-1/2 mr-16 ">
        <h1 className='text-8xl -mb-6 tracking-tighter font-[Founders Grotesk] font-bold'>PRESENTATIONS
            </h1>
            <div className="dets mt-10 "> S:
                <a href="#" className=' mt-4 block text-lg underline font-["Nueue Montreal"] text-tight font-light'>Home</a>
                <a href="#" className='block text-lg underline font-["Nueue Montreal"] text-tight font-light'>Services</a>
                <a href="#" className=' mt-4 block text-lg underline font-["Nueue Montreal"] text-tight font-light'>Twitter</a>
                <a href="#" className='block text-lg underline font-["Nueue Montreal"] text-tight font-light'>Behance</a>
                <a href="#" className='block text-lg underline font-["Nueue Montreal"] text-tight font-light'>Facebook</a>
                <a href="#" className='block text-lg underline font-["Nueue Montreal"] text-tight font-light'>LinkedIn</a>
                </div>
                <div className="dets mt-10 block "> L:
                <a href="#" className=' mt-4 block text-lg underline font-["Nueue Montreal"] text-tight font-light'>202-1965 W 4th Ave</a>
                <a href="#" className='block text-lg underline font-["Nueue Montreal"] text-tight font-light'>Vancouver, Canada</a>
                </div>
                <div className="dets mt-10 block "> M:
                <a href="#" className=' mt-4 block text-lg underline font-["Nueue Montreal"] text-tight font-light'>Home</a>
                <a href="#" className='block text-lg underline font-["Nueue Montreal"] text-tight font-light'>Services</a>
                <a href="#" className=' block text-lg underline font-["Nueue Montreal"] text-tight font-light'>Our Work</a>
                <a href="#" className='block text-lg underline font-["Nueue Montreal"] text-tight font-light '>Insights</a>
                </div>
                </div>
                
      
    </div>
  )
}

export default Footer
