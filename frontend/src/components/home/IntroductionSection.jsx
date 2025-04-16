import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import getImage from '../../assets/misc/assetsLoader'

const profileTeam = [
  {
    name: 'Sirhan',
    position: 'Content Creator',
    avatar: 'homeAssets/introduction/avatar4.png',
    description: 'Lorem ipsum dolor sit amet...',
    id: '1',
    link: 'homeAssets/introduction/sirhanIntro.webp',
    videoId: 'CN_MZpHkkgc' 
  },
  {
    name: 'Althaf',
    position: 'Fullstack Developer',
    avatar: 'homeAssets/introduction/avatar1.png',
    description: 'Lorem ipsum dolor sit amet...',
    id: '2',
    link: 'homeAssets/introduction/althafIntro.webp',
    videoId: 'CN_MZpHkkgc'
  },
  {
    name: 'Asti',
    position: 'Graphic Designer',
    avatar: 'homeAssets/introduction/avatar2.png',
    description: 'Lorem ipsum dolor sit amet...',
    id: '2',
    link: 'homeAssets/introduction/astiIntro.webp',
    videoId: 'CN_MZpHkkgc'
  },
  {
    name: 'Kaysi',
    position: 'Photographer',
    avatar: 'homeAssets/introduction/avatar3.png',
    description: 'Lorem ipsum dolor sit amet...',
    id: '2',
    link: 'homeAssets/introduction/kaisyiIntro.webp',
    videoId: 'CN_MZpHkkgc'
  },
  

]

const IntroductionSection = () => {

    // Parallax Animation
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [isOpen, setIsOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(null)

  return (
    <div className='container p-4 pt-20 md:p-6 lg:p-10'>

      {/* Section title */}
      <motion.div
        className='flex justify-baseline items-center mb-7'
        ref={ref}
        initial={{ x: -120, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className='text-2xl text-white'>
          Meet our <span className='special-text rounded-xl'>team</span>
        </h1>
      </motion.div>

      {/* Swiper container */}
      <Swiper
        className='container'
        modules={[Pagination, Autoplay]}
        slidesPerView="auto"
        spaceBetween={20}
        speed={1500}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true, el: '.custom-pagination' }}
      >
        {profileTeam.map((member) => (
          <SwiperSlide key={member.id} className='max-w-[800px]'>
            <div className='flex w-full rounded-2xl border-2 border-white h-[200px]'>
              
              <div className="w-[67%] h-full relative">
                <img
                  src={getImage(member.link)}
                  className='w-full h-full object-cover rounded-tl-2xl rounded-bl-2xl'
                  alt='intro'
                />
                <button
                  onClick={() => {
                    setIsOpen(true)
                    setCurrentVideo(member.videoId)
                  }}
                  className='play-button absolute bottom-2 left-2 py-1 px-2 bg-white rounded-full text-black text-12px cursor-pointer'>
                  Watch Video
                </button>
              </div>

              <div className='flex flex-col items-center justify-center p-1.5 w-[33%]'>
                <img
                  src={getImage(member.avatar)}
                  className='w-10 h-10 object-cover rounded-full mb-2'
                  alt={`profile-image-${member.id}`}
                />
                <div className='text-white text-center'>
                  <h3 className='text-sm font-bold'>{member.name}</h3>
                  <p className='text-10px'>{member.position}</p>
                  <p className='text-8px'>{member.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination dots */}
      <div className="custom-pagination mt-4 flex justify-center gap-2" />

      {/* Modal/to show popup of the video */}
      <AnimatePresence>
        {/* To make smooth popup */}
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
          >
            {/* The video popup */}
            <div className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl mx-2 overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

             {/* Exit video button */}
              <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-white text-2xl cursor-pointer">
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default IntroductionSection