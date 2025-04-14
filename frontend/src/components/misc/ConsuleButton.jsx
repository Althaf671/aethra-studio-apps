import React from 'react'
import getImage from '../../assets/misc/assetsLoader'

const ConsuleButton = () => {
  return (
    <div className='consule-button sticky bottom-5 left-[116px] px-8 py-2 mt-5 gap-1 flex w-[150px] text-xl z-900 text-white border-2
     border-white text-center justify-center items-center rounded-4xl'>CONSULE<img src={getImage('misc/consule.svg')} className='w-7 h-6' /></div>
  )
}

export default ConsuleButton