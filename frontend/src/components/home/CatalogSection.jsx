import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import getImage from '../../assets/misc/assetsLoader'
import { easeOut, motion, useInView } from 'framer-motion'
import TestimonialSwiper from './TestimonialSwiper'


const CatalogSection = () => {
    
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
    <div className='p-4 pt-20 md:p-6 lg:p-10'>

         {/* Section title */}
        <motion.div
            className='flex justify-baseline items-center mb-7'
            ref={ref}
            initial={{ x: -120, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            <h1 className='text-2xl text-white'>
                Our <span className='special-text rounded-xl'>Catalog</span>
            </h1>
        </motion.div>

         <div className='grid grid-cols-2 gap-6 text-white'>
        
                    {/* Catalog Item Content Creator */}
                    <div onClick={handleTap} className={`catalog-card relative flex flex-col border-2 px-4 py-1 border-white rounded-2xl ${isTapped ? "active" : ""}`}>
                        <img src={getImage('homeAssets/contentCreatorCatalog.png')} alt='content-creator' />
                        <div className='flex justify-between -mt-0.5'>
                            <div className='flex flex-col'>
                                <h1 className='text-16px'>Content Creation</h1>
                                <p className='text-12px mb-9'>Promotional videos that speak your brand.</p>
                            </div>
                            <p className='absolute bottom-2 right-3.5 text-10px'>Start from <span className='price-color'>IDR 500K</span></p>
                        </div>
                    </div>
        
                    {/* Catalog Item Web Developer */}
                    <div onClick={handleTap} className={`catalog-card relative flex flex-col border-2 px-4 py-1 border-white rounded-2xl ${isTapped ? "active" : ""}`}>
                        <img src={getImage('homeAssets/webDevCatalog.png')} className='w-full' alt='web-developer' />
                        <div className='flex justify-between -mt-0.5'>
                            <div className='flex flex-col'>
                                <h1 className='text-16px'>Web Fullstack</h1>
                                <p className='text-12px mb-9 tracking-tight'>Complete websites frontend to backend, fully functional.</p>
                            </div>
                            <p className='absolute bottom-2 right-3.5 text-10px'>Start from <span className='price-color'>IDR 2000K</span></p>
                        </div>
                    </div>
        
                    {/* Catalog Item Graphic Designer */}
                    <div onClick={handleTap} className={`catalog-card relative flex flex-col border-2 px-4 py-1 border-white rounded-2xl ${isTapped ? "active" : ""}`}>
                        <img src={getImage('homeAssets/graphicDesignCatalog.png')} alt='graphic-designer' />
                        <div className='flex justify-between -mt-0.5'>
                            <div className='flex flex-col'>
                                <h1 className='text-16px'>Graphic Design</h1>
                                <p className='text-12px mb-9'>Bold visuals, sharp designs, made to stand out.</p>
                            </div>
                            <p className='absolute bottom-2 right-3.5 text-10px'>Start from <span className='price-color'>IDR 250K</span></p>
                        </div>
                    </div>
        
                    {/* Catalog Item Photographer */}
                    <div onClick={handleTap} className={`catalog-card relative flex flex-col border-2 px-4 py-1 border-white rounded-2xl ${isTapped ? "active" : ""}`}>
                        <img src={getImage('homeAssets/photographyCatalog.png')} className='w-full' alt='photography' />
                        <div className='flex justify-between -mt-0.5'>
                            <div className='flex flex-col'>
                                <h1 className='text-16px'>Video Editing</h1>
                                <p className='text-12px mb-9'>Your brand, perfectly captured in every frame.</p>
                            </div>
                            <p className='absolute bottom-2 right-3.5 text-10px'>Start from <span className='price-color'>IDR 250K</span></p>
                        </div>
                    </div>
                </div>

    </div>
  )
}

export default CatalogSection