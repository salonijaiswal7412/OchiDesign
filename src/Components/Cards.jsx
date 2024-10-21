import React from 'react'

function Cards() {
    return (
        <div className='w-full max-h-screen bg-zinc-900 flex gap-5 px-16 pt-4'>
            <div className="cardcontainer h-[50vh]  w-1/2 ">
                <div className="w-full h-full bg-[#004D43] rounded-lg flex items-center justify-center relative">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <div className="btn text-[#CDEA68] border-solid border-[1px] absolute left-2 px-3 py-1 bottom-4 rounded-full border-[#CDEA68] uppercase">@2019-2022</div></div>
                    </div>
            <div className="cardcontainer h-[50vh] w-1/2 flex gap-5">
                <div className="w-1/2  bg-[#212121] rounded-lg flex items-center justify-center relative">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <div className="btn text-[white] border-solid border-[1px] absolute left-2 px-3 py-1 bottom-4 rounded-full border-[white] uppercase">RATING 5.0 ON CLUTCH</div>
                </div>
                <div className="w-1/2  bg-[#212121] rounded-lg flex items-center justify-center relative">
                    <img className='h-24' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <div className="btn text-[white] border-solid border-[1px] absolute left-2 px-3 py-1 bottom-4 rounded-full border-[white] uppercase">BUSINESS BOOTCAMP ALUMNI</div>
                </div></div>
        </div>
    )
}

export default Cards
