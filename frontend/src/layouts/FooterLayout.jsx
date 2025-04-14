import React from 'react'
import { Link } from 'react-router-dom'

const FooterLayout = () => {
  return (
    <>
    <div className='flex justify-between mt-10 px-10 pt-5 pb-7 border-y-1 bg-black border-white'>
        <div className='flex flex-col text-white text-center gap-1'>
            <h1 className='text-[15px] tracking-wide font-semibold'>Service</h1>
            <Link className='text-[11px]' to='/service'>Content Creation</Link>
            <Link className='text-[11px]' to='/service'>Web Fullstack</Link>
            <Link className='text-[11px]' to='/service'>Graphic Designer</Link>
            <Link className='text-[11px]' to='/service'>Video Editing</Link>
        </div>
        <div className='flex flex-col text-white text-center gap-1'>
            <h1 className='text-[15px] tracking-wide font-semibold'>About us</h1>
            <Link className='text-[11px]' to='/about'>Company</Link>
            <Link className='text-[11px]' to='/about'>Career</Link>
            <Link className='text-[11px]' to='/about'>FAQs</Link>
        </div>
        <div className='flex flex-col text-white text-center gap-1'>
            <h1 className='text-[15px] tracking-wide font-semibold'>Social Media</h1>
            <Link className='text-[11px]' to='/service'>Instagram</Link>
            <Link className='text-[11px]' to='/service'>TikTok</Link>
            <Link className='text-[11px]' to='/service'>YouTube</Link>
        </div>
    </div>
    <p className='text-white text-10px text-center pt-2.5 pb-3.5 opacity-70 tracking-wide'>© 2025 Aethra Studio All rights reserved.</p>
    </>
  )
}

export default FooterLayout