import React from 'react'
import getImage from '../../assets/misc/assetsLoader'

const ConsuleButton = () => {
  return (
    <>
       <a href='https://blog.whatsapp.com' className='bottom-5 left-[116px] px-8 py-2 gap-1 mt-5 flex w-[150px] 
       text-xl text-white border-2 border-white text-center justify-center items-center rounded-4xl bg-black active:bg-gray-900' target='_blank' 
       rel="noopener noreferrer">CONSULT<img src={getImage('misc/consule.svg')} className='w-7 h-7' /></a>
      <p className='text-white text-14px mt-2 tracking-wider italic text-center opacity-80'>Get in touch for a personalized consultation.</p>
    </>
  )
}

export default ConsuleButton