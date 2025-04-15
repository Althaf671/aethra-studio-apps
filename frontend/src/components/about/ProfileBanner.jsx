import React from 'react'
import getImage from '../../assets/misc/assetsLoader'
import SocialMedia from '../misc/SocialMedia'

const ProfileBanner = () => {
  return (
    <div className='container flex flex-col p-4 pt-13 md:p-6 lg:p-10 '>
        
        <div className='flex justify-between text-justify items-center text-[15px] text-white gap-5'>
            {/* Left Profile */}
            <p className='w-[55%] h-[170px] indent-3 '> Aethra Studio began as a late-night passion project between friends creatives and developers who believed 
                great ideas deserve to shine, even on a small budget.
            </p>

            {/* Right Profile */}
            <div className='w-[45%] h-[170px] flex flex-col gap-1.5 items-center'>
                <img src={getImage('misc/AethraLogo.jpeg')} className='w-[100%] h-[105px] object-cover rounded-2xl' />
                <p className='text-10px italic opacity-70 -mt-0.5 -mb-1'>Visit Our Social Media</p>
                <SocialMedia />
            </div>
        </div>

         {/* Company Milestone */}
         <div className='flex items-center text-white mt-8 mb-8'>

            {/* Tooltip while hovering */}
            <span className="relative group text-2xl cursor-pointer">
            <div className='flex justify-center items-center'>
            <hr className='bg-white h-[4px] w-12' />
            <p className='text-2xl flex flex-col relative'>&#9679;<p className='absolute w-12 -bottom-2.5 -left-4 text-center opacity-70 text-10px'>7 March</p></p>
            </div>
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none z-10">
                    Ini tooltip kecil di atas
                </div>
            </span>

            {/* Tooltip while hovering */}
            <span className="relative group text-2xl cursor-pointer">
            <div className='flex justify-center items-center'>
            <hr className='bg-white h-[4px] w-12' />
            <p className='text-2xl flex flex-col relative'>&#9679;<p className='absolute w-12 -top-2.5 -left-4 text-center opacity-70 text-10px'>14 March</p></p>
            </div>
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none z-10">
                    Ini tooltip kecil di atas
                </div>
            </span>

            {/* Tooltip while hovering */}
            <span className="relative group text-2xl cursor-pointer">
            <div className='flex justify-center items-center'>
            <hr className='bg-white h-[4px] w-12' />
            <p className='text-2xl flex flex-col relative'>&#9679;<p className='absolute w-12 -bottom-2.5 -left-4 text-center opacity-70 text-10px'>26 March</p></p>
            </div>
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none z-10">
                    Ini tooltip kecil di atas
                </div>
            </span>

            {/* Tooltip while hovering */}
            <span className="relative group text-2xl cursor-pointer">
            <div className='flex justify-center items-center'>
            <hr className='bg-white h-[4px] w-12' />
            <p className='text-2xl flex flex-col relative'>&#9679;<p className='absolute w-12 -top-2.5 -left-4 text-center opacity-70 text-10px'>1 April</p></p>
            </div>
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none z-10">
                    Ini tooltip kecil di atas
                </div>
            </span>

            {/* Tooltip while hovering */}
            <span className="relative group text-2xl cursor-pointer">
            <div className='flex justify-center items-center'>
            <hr className='bg-white h-[4px] w-12' />
            <p className='text-2xl flex flex-col relative'>&#9679;<p className='absolute w-12 -bottom-2.5 -left-4 text-center opacity-70 text-10px'>9 April</p></p>
            </div>
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none z-10">
                    Ini tooltip kecil di atas
                </div>
            </span>

        </div>

    </div>
  )
}

export default ProfileBanner