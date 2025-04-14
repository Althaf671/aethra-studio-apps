import React, { useRef } from 'react'
import getImage from '../../assets/misc/assetsLoader'
import { easeOut, motion, useInView } from 'framer-motion'


const TopSection = () => {
    
     // Parallax Title
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (

    <div className='p-4 pt-10 md:p-6 lg:p-10'>

        {/* Top Hero Section */}
        <div className="container mx-auto flex flex-col gap-2 text-white">
            <img src={getImage} alt='hero-image' />
            <div className='flex justify-between mt-12'>
                <h1 className='text-2xl'>Aethra Studio</h1>
                <p>Test</p>
            </div>
            <p className='text-14px text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tempore! Deleniti expedita et aperiam, 
                aliquam eum quibusdam aliquid voluptatem pariatur, doloremque quae delectus quidem. Odio tenetur consectetur 
                sed nulla officiis.
            </p>
            {/* Small Milestone */}
            <div className='flex justify-between mt-5'>
                <div className='flex flex-col border-1 w-[11.5rem] px-3 py-3 gap-[3px] border-white text-xs justify-center rounded-2xl'>
                   <h2 className='text-10px opacity-70'>Years of Experience</h2>
                   <div className='flex gap-1 items-center text-14px'>
                        <img src={getImage('misc/timeWhite.svg')} className='w-6' alt='time-image' />
                        <p>10+ years</p>
                   </div>
                </div>
                <div className='flex flex-col border-1 w-[9rem] px-3 py-3 gap-[3px] border-white text-xs justify-center rounded-2xl'>
                   <h2 className='text-10px opacity-70'>Project Handled</h2>
                   <div className='flex gap-1 items-center text-14px'>
                        <img src={getImage('misc/chart.svg')} className='w-6' alt='time-image' />
                        <p>50+ projects</p>
                   </div>
                </div>
            </div>

        </div>



        {/* Why us Section */}
         <motion.div 
            className='flex flex-col justify-center items-center mt-20 text-white gap-2'
            ref={ref}
            initial={{ y: 0, opacity: 0}}
            animate={ isInView ? { y: -20, opacity: 1} : {}}
            transition={{ duration: 1, ease: easeOut}}
            >
                <h1 className='text-2xl letterSpacing-1px'>Why Choose Us?</h1>
                <p className='text-12px text-center'>Aethra Studio is a small creative agency specializing in promotional content, web development, graphic design, and photography. We deliver quality and passion in every project.
                </p>
        </motion.div>


        {/* Catalog Section */}
        <div className='grid grid-cols-2 gap-6 mt-5 text-white'>

            {/* Catalog Item Content Creator */}
            <div className='relative flex flex-col border-1 px-4 py-1 border-white rounded-2xl'>
                <img src='' alt='content-creator' />
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <h1 className='text-16px'>Content Creator</h1>
                        <p className='text-12px mb-11'>Promotional videos that speak your brand.</p>
                    </div>
                    <p className='absolute bottom-2 right-3.5 text-10px'>Start from IDR 500K</p>
                </div>
            </div>

            {/* Catalog Item Web Developer */}
            <div className='relative flex flex-col border-1 px-4 py-1 border-white rounded-2xl'>
                <img src={getImage('homeAssets/webDevCatalog.png')} className='w-full' alt='content-creator' />
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <h1 className='text-16px'>Web Fullstack</h1>
                        <p className='text-12px mb-11 tracking-tight'>Complete websites frontend to backend, fully functional.</p>
                    </div>
                    <p className='absolute bottom-2 right-3.5 text-10px'>Start from IDR 2000K</p>
                </div>
            </div>

            {/* Catalog Item Graphic Designer */}
            <div className='relative flex flex-col border-1 px-4 py-1 border-white rounded-2xl'>
                <img src='' alt='content-creator' />
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <h1 className='text-16px'>Graphic Designer</h1>
                        <p className='text-12px mb-11'>Bold visuals, sharp designs, made to stand out.</p>
                    </div>
                    <p className='absolute bottom-2 right-3.5 text-10px'>Start from IDR 250K</p>
                </div>
            </div>

            {/* Catalog Item Photographer */}
            <div className='relative flex flex-col border-1 px-4 py-1 border-white rounded-2xl'>
                <img src='' alt='content-creator' />
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <h1 className='text-16px'>Photographer</h1>
                        <p className='text-12px mb-11'>Your brand, perfectly captured in every frame.</p>
                    </div>
                    <p className='absolute bottom-2 right-3.5 text-10px'>Start from IDR 250K</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default TopSection