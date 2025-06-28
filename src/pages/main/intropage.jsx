import React from 'react'
import banner1 from '../../assets/bannerimage.png'

function Intropage() {
    return (
        <div className="!px-20 !py-10 lg:!mt-15 md:!mt-10 bg-white">
            <div className='w-[100%] h-[90vh] relative'>
                <div className='absolute top-0 left-0 w-full h-full'>
                    <img src={banner1} alt='' className='w-full h-full object-cover' />
                </div>
                <div>
                    <h3 className='text-[18px]  py-3 px-5 rounded-[30px] text-center font-sans bg-clip-text bg-gradient-to-r from-[#E770C0] via-[#C670DE] to-[#9F70FD] text-transparent'>consultant</h3>
                    <h3 className='text-[50px] text-center !font-bold'>Smarter Investing,Brilliantly</h3>
                    <h3 className='text-[50px] text-center !font-bold'> Spending</h3>
                </div>
            </div>
        </div>
    )
}

export default Intropage