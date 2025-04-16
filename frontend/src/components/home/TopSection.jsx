import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import getImage from '../../assets/misc/assetsLoader'
import { easeOut, motion, useInView } from 'framer-motion'
import TestimonialSwiper from './TestimonialSwiper'
import SocialMedia from '../misc/SocialMedia'


const TopSection = () => {
    
    // Parallax Title
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Card Catalog Animation
    const [isTapped, setIsTapped] = useState(false);  
    const navigate = useNavigate();

    const handleTap = () => {
        if (isTapped) {
            navigate("/service");
            } else {
                setIsTapped(true);

                // To reset the card animation if the user didn't did the second tap, i set the timeout for 1 second
                setTimeout(() => {
                    setIsTapped(false)
                }, 500);
        }
    }


  return (

    <div className=''>

        {/* Top Hero Section */}
        <div className="container mx-auto flex flex-col gap-2 text-white p-4 pt-10 md:p-6 lg:p-10">

            {/* 3d Model */}
            <model-viewer
            src="../../3d-Model/littlest_tokyo_sunset_-_3d_editor_challenge.glb"
            alt="A 3D model of Aethra Logo"
            disable-zoom
            touch-action="pan-y"
            auto-rotate
            camera-controls
            ar
            style={{ width: '100%', height: '320px', touchAction: 'pan-y' }}>
            </model-viewer>
            <p className='text-[7px] opacity-80'> <a href='https://sketchfab.com/phil_xg'>Model by Phil_XG</a></p>

            <div className='flex justify-between mt-10 items-center'>
                <h1 className='text-2xl'>Aethra Studio</h1>
                 <SocialMedia />
            </div>
            <p className='text-14px text-justify'>Aethra Studio is a small but passionate creative service agency that offers promotional content, website development, graphic design, and photography.
                 We help bring your ideas to life with a personal touch and professional quality and arts with friendly-budget <Link to="/about" className='text-blue-500 hover:underline active:underline'>more...</Link>
            </p>

            {/* Small Milestone */}
            <div className='flex justify-between mt-5'>
                <div className='flex flex-col border-2 w-[11.5rem] px-3 py-3 gap-[3px] border-white text-xs justify-center rounded-2xl'>
                   <h2 className='text-10px opacity-70'>Years of Experience</h2>
                   <div className='flex gap-1 items-center text-14px'>
                        <img src={getImage('misc/timeWhite.svg')} className='w-6' alt='time-image' />
                        <p>0 year</p>
                   </div>
                </div>
                <div className='flex flex-col border-2 w-[9rem] px-3 py-3 gap-[3px] border-white text-xs justify-center rounded-2xl'>
                   <h2 className='text-10px opacity-70'>Project Handled</h2>
                   <div className='flex gap-1 items-center text-14px'>
                        <img src={getImage('misc/chart.svg')} className='w-6' alt='time-image' />
                        <p>0 project</p>
                   </div>
                </div>
            </div>

        </div>

        {/* Why us Section */}
        <div className='relative'>
        <motion.div 
            className='flex flex-col w-full justify-center items-center mt-30 text-white p-4 pt-10 md:p-6 lg:p-10'
            ref={ref}
            initial={{ y: 30, opacity: 0}}
            animate={ isInView ? { y: 0, opacity: 1} : {}}
            transition={{ duration: 0.5, ease: easeOut}}
            >
                <h1 className='text-3xl letterSpacing-1px z-100 font-semibold mb-2'>Why Choose Us?</h1>
                <p className='text-12px text-center z-100'>Our field are promotional content, web development, graphic design, and photography. We deliver quality and passion in every project.
                </p>
        </motion.div>
        <div className='relative'>
            <img src={getImage('homeAssets/topBg.webp')} className='absolute w-full h-[280px] object-cover -bottom-20 z-10 p-0 opacity-50' />
            <div className='absolute -bottom-25 w-full bg-black/60 h-5'></div>
        </div>
        </div>

    </div>

  )
}

export default TopSection