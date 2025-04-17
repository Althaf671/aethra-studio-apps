import React from 'react'
import getImage from '../../assets/misc/assetsLoader'

const SocialMedia = () => {
  return (
    <div className='flex gap-2.5 items-center'>
      <a href='https://www.instagram.com/aethrastudio.id?igsh=NHAycWY3aGZmd3c=' target="_blank"><img src={getImage('homeAssets/instagram.svg')} className='w-5' alt='instagram' /></a>
      <a href='https://www.tiktok.com/@aethra.studio26?_t=ZS-8vVztYBtQuY&_r=1' target="_blank"><img src={getImage('homeAssets/tiktok.svg')} className='w-5' alt='tiktok' /></a>
      <a href='https://youtube.com/@aethrastudio?si=9mrK3X_Xy-jIR9yP' target='_blank'><img src={getImage('homeAssets/youtube.svg')} className='w-5' alt='youtube' /></a>
    </div>
  )
}

export default SocialMedia