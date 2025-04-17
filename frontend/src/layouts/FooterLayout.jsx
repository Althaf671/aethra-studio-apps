import React from 'react'
import { Link } from 'react-router-dom'
import getImage from '../assets/misc/assetsLoader'

const FooterLayout = () => {
  return (
    <>
    <div className='relative flex bg-white/5 mt-10 text-white px-5 py-4'>
      <div className='flex w-full justify-between items-center'>
        <div className='flex  flex-col'>
            <h1 className='text-xl text-white tracking-widest mb-1'>Media Partner</h1>
            <div className='flex gap-2.5'>
              <img src={getImage('misc/fake1.svg')} className='w-8' />
              <img src={getImage('misc/fake2.svg')} className='w-8' />
            </div>
        </div>
        <img src={getImage('misc/AethraLogo.jpeg')} className='w-21 h-18 p-1 rounded-2xl shadow-[0_1px_50px_rgba(255,255,255,0.1)]' />
      </div>
    </div>


    <div className='flex justify-between px-5 pb-10 mt-6 border-b-1 border-white'>
        <div className='flex flex-col text-white text-left gap-1'>
            <h1 className='text-[14px] tracking-tight mb-0.5'>Service</h1>
            <Link className='text-[11px]' to='/service'>Content Creation</Link>
            <Link className='text-[11px]' to='/service'>Web Fullstack</Link>
            <Link className='text-[11px]' to='/service'>Graphic Designer</Link>
            <Link className='text-[11px]' to='/service'>Video Editing</Link>
        </div>
        <div className='flex flex-col text-white text-left gap-1'>
            <h1 className='text-[14px] tracking-tight mb-0.5'>About us</h1>
            <Link className='text-[11px]' to='/about'>Company</Link>
            <Link className='text-[11px]' to='/about'>Career</Link>
            <Link className='text-[11px]' to='/about'>FAQs</Link>
        </div>
        <div className='flex flex-col text-white text-left gap-1'>
            <h1 className='text-[14px] tracking-tight mb-0.5'>Social Media</h1>
            <a href='https://www.instagram.com/aethrastudio.id?igsh=NHAycWY3aGZmd3c=' target="_blank" className='text-[11px]' to='/service'>Instagram</a>
            <a href='https://www.tiktok.com/@aethra.studio26?_t=ZS-8vVztYBtQuY&_r=1' target="_blank" className='text-[11px]' to='/service'>TikTok</a>
            <a href='https://youtube.com/@aethrastudio?si=9mrK3X_Xy-jIR9yP' target='_blank' className='text-[11px]' to='/service'>YouTube</a>
        </div>
    </div>
    <p className='text-white text-10px text-center pt-2.5 pb-3.5 opacity-70 tracking-wide'>© 2025 Aethra Studio All rights reserved.</p>
    </>
  )
}

export default FooterLayout