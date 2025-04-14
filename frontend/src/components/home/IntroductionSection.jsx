import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod tincidunt eros, ac vehicula magna feugiat at.',
    id: '1',
    image: 'homeAssets/developer.jpg'
  },
  {
    name: 'Althaf',
    position: 'Fullstack Developer',
    avatar: 'homeAssets/introduction/avatar1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod tincidunt eros, ac vehicula magna feugiat at.',
    id: '2',
    image: 'homeAssets/developer.jpg'
  },
  {
    name: 'Asti',
    position: 'Graphic Designer',
    avatar: 'homeAssets/introduction/avatar2.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod tincidunt eros, ac vehicula magna feugiat at.',
    id: '3',
    image: 'homeAssets/developer.jpg'
  },
  {
    name: 'Kaisyi',
    position: 'Photograper',
    avatar: 'homeAssets/introduction/avatar3.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod tincidunt eros, ac vehicula magna feugiat at.',
    id: '4',
    image: 'homeAssets/developer.jpg'
  },
]

const IntroductionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className='container p-4 pt-10 md:p-6 lg:p-10'>

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
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true, el: '.custom-pagination' }}
      >
        {profileTeam.map((member) => (
          <SwiperSlide key={member.id} className='max-w-[350px]'>
            <div className='flex w-full rounded-2xl border border-white h-[200px]'>
              <img
                src={getImage(member.image)}
                className='w-[70%] h-full object-cover rounded-tl-2xl rounded-bl-2xl'
                alt='intro'
              />
              <div className='flex flex-col items-center justify-center p-1.5 w-[30%]'>
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
    </div>
  )
}

export default IntroductionSection