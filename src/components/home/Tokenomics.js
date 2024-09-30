import React from 'react'
import img from "../../assets/img/TokenomicsSV.svg";

export default function Tokenomics() {
    return (
        <section 
        id='tokenomics' 
        data-aos="flip-down"
        className=' sm:px-1 lg:px-3 my-16'>
            <div className='text-center mb-12 px-3'>
                <h1 className='text-[30px] md:text-[40px] lg:text-[50px] font-bold py-4 text-red1 '>
                     Tokenomics</h1>
                <p className='text-base text-gray-300'>The Community Crypto Incentive & Reward Program</p>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center'>
                {/* Right div for text */}
                <div className='w-full md:w-[50%] lg:w-[50%] flex flex-col gap-6'>
                    <p className='flex gap-1 text-gray-300 text-3xl font-bold text-center md:text-start'> <span className='text-red1'>$</span> R2PIP</p>
                    <h2 className='font-bold flex gap-1 text-gray-300 text-2xl md:text-4xl py-5 px-1'>Total Supply <sapan className="text-red1 ml-2">25,000,000</sapan></h2>

                    <p className='text-gray-300 text-xl'> <span className='font-bold text-xl text-red1'>Buy Fee: 4%</span> {`(3% Reward to holders, 1% Marketing)`}</p>
                    <p className='text-gray-300 text-xl'> <span className='font-bold text-xl text-green-400'>Sell Fee: 5%</span> {`(3% Reward, 1% buyback, 1% Marketing)`}</p>

                </div>


                {/* Left div for image */}
                <div className='w-full md:w-[50%] lg:w-[50%]'>
                    <img src={img} alt='image' className='' />
                </div>
            </div>

        </section>
    )
}
