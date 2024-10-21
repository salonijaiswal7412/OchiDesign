import React from 'react'

function Featured() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white '>
        <h1 className='text-5xl mt-20 mx-16'>Featured Projects</h1>
        <div className="w-full border-t-[0.5px] border-[#ffffff] px-0 pt-10  mt-16 "></div>
        <div className="row w-full flex  px-16">
            <div className="box w-1/2 ">
            <h1 className='uppercase mx-4'>Cardboard spaceship</h1>
            <div className="m-4 h-[70vh] bg-[url('https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png')] cursor-pointer bg-cover bg-center rounded-lg">
            </div>
            <div className="btn-row flex gap-2 mx-4">
                <div className="btn border-solid border-[1px] px-3 py-1 rounded-full border-white uppercase"> Branded template</div>
                <div className="btn border-solid border-[1px] px-3 py-1 rounded-full border-white uppercase"> Sales deck</div>
                <div className="btn border-solid border-[1px] px-3 py-1 rounded-full border-white uppercase"> Social media template</div>
            </div>
            </div>
            
            <div className="box w-1/2 ">
            <h1 className='uppercase mx-4'>ah2 & matt horn</h1>
            <div className="m-4 h-[70vh]  cursor-pointer bg-[url('https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png')] bg-cover bg-center rounded-lg">

            </div>
            <div className="btn-row flex gap-2 mx-4">
                
                <div className="btn border-solid border-[1px] px-3 py-1 rounded-full border-white uppercase"> pitch deck</div>
                
            </div>
            
            </div>
        </div>
        <div className="row w-full flex  px-16 py-16">
            <div className="box w-1/2  ">
            <h1 className='uppercase mx-4'>Fyde</h1>
            <div className="m-4 h-[70vh] bg-[url('https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png')] bg-cover cursor-pointer bg-center rounded-lg">
            </div>
            <div className="btn-row flex gap-2 mx-4">
                <div className="btn border-solid border-[1px] px-3 py-1 rounded-full border-white uppercase"> Audit</div>
                <div className="btn border-solid border-[1px] px-3 py-1 rounded-full border-white uppercase"> Copywriting</div>
                <div className="btn border-solid border-[1px] px-3 py-1 rounded-full border-white uppercase"> sales deck</div>
                <div className="btn border-solid border-[1px] px-3 py-1 rounded-full border-white uppercase"> slide design</div>
            </div>
            </div>
            
            <div className="box  w-1/2 ">
            <h1 className='uppercase mx-4'>trawa</h1>
            <div className="m-4 h-[70vh] cursor-pointer bg-[url('https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg')] bg-cover bg-center rounded-lg">

            </div>
            <div className="btn-row flex gap-2 mx-4">
                
                <div className="btn border-solid border-[1px] px-3 py-1 rounded-full border-white uppercase"> brand identity</div>
                <div className="btn border-solid border-[1px] px-3 py-1 rounded-full border-white uppercase"> design research</div>
                <div className="btn border-solid border-[1px] px-3 py-1 rounded-full border-white uppercase"> investor deck</div>
                
            </div>
            
            </div>
        </div>
        
    </div>
  )
}

export default Featured
