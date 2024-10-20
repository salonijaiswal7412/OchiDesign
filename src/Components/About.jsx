import React from 'react'

function About() {
    return (
        <div className='w-full bg-[#CDEA68] min-h-screen rounded-t-3xl py-20 '>
            <h1 className='text-black font-["Neue Montreal"] text-[4vw] leading-[4vw] tracking-tight mx-16'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
            <div className="w-full border-t-[0.5px] border-[#323a12] px-0 pt-10  mt-20 "></div>
            <div className="flex text-zinc-900 text-lg h-[30vh] items-center leading-2">
                <div className="w-1/2 px-16">What you can expect:</div>
                <div className="w-1/2 px-16">
                    We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.<br></br>

                    We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</div>
            </div>
            <div className="w-full border-t-[0.5px] border-[#323a12] px-0 pt-10  mt-20"></div>
            <div className="flex">
                <div className='w-1/2 ml-16'>
                    <h1 className='text-6xl text-zinc-900 '>Our Approach:</h1>
                    <button className='px-8 py-4 rounded-full flex gap-10 items-center text-lg uppercase  bg-zinc-900 mt-8'> Read More
                        <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
                    </button>
                </div>
                <div className="w-1/2 h-[70vh] rounded-3xl bg-[#afd429] mr-14 overflow-hidden">
                    <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" className="h-full" alt="" /></div>
            </div>
        </div>
    )
}

export default About
