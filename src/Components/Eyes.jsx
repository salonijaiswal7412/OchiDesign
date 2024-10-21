import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate,setrotate]=useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX=e.clientX;
            let mouseY=e.clientY;

            let deltaX=mouseX-window.innerWidth/2;
            let deltaY=mouseY-window.innerHeight/2;

            var angle=Math.atan2(deltaY,deltaX)*(180/Math.PI);
            setrotate(angle);
        })
    })
    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed='-.7' className=" relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]" >
                <div className="absolute w-1/3 flex justify-between  left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
                    <div className="eye-1 w-[15vw] h-[15vw] bg-white rounded-full flex items-center justify-center">
                        <div className="eye-2 w-[10vw] h-[10vw] bg-black rounded-full relative">
                            <div style={{transform:`translate(-50%,-50%) rotate(${rotate-180}deg)`}}className="absolute line w-full h-5  left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]"><div className="eye-3 w-10 h-10 bg-white rounded-full"></div></div>

                        </div>
                    </div>
                    <div className="eye-1 w-[15vw] h-[15vw] bg-white rounded-full flex items-center justify-center">
                        <div className="eye-2 w-[10vw] h-[10vw] bg-black rounded-full relative">
                            <div style={{transform:`translate(-50%,-50%) rotate(${rotate-180}deg)`}}className="absolute line w-full h-5  left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]"><div className="eye-3 w-10 h-10 bg-white rounded-full"></div></div>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Eyes
