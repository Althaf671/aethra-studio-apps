import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

// Library
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import 'swiper/css/effect-fade';

import getImage from '../../assets/misc/assetsLoader';

const testimonials = [
    {
      name: 'Kashy',
      review: 'The site looks great and works flawlessly. Delivered on time with everything I asked for. Super happy!',
      avatar: 'homeAssets/introduction/avatar2.png',
      project: 'Web Fullstack',
      date: '27/02/2025',
      id: '2'
    },
    {
      name: 'Chann',
      review: 'Smooth and clean edits. The video turned out great and really boosted my content. Definitely coming back.',
      avatar: 'homeAssets/introduction/avatar3.png',
      project: 'Video Editing',
      date: '01/03/2025',
      id: '3'
    },
    {
      name: 'Enn',
      review: 'Clean, creative, and exactly what I needed. Great communication and fast turnaround. Loved the result!',
      avatar: 'homeAssets/introduction/avatar4.png',
      project: 'Graphic Design',
      date: '05/03/2025',
      id: '4'
    },
  ];
  

const TestimonialSwiper = () => {

  // Parallax Title
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Swiper ref
  const swiperRef = useRef(null);

  return (
    <div className='container p-8 pt-10 md:p-6 lg:p-10'>

    <Swiper className=''
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={600}
                modules={[Navigation, EffectFade]}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >

                  {/* Testimonial Card */}
                  {testimonials.map((testimonials, index) => (
                    <SwiperSlide key={index}>
                    <div className='relative flex flex-col card-shadow p-5 bg-white h-[14rem] gap-2 rounded-3xl'>
                        {/* Upper card */}
                        <div className='flex justify-between items-center text-left mb-2'>
                        
                        <p className='text-12px'>Reviewed on {testimonials.date}</p>
                        
                        <div className='flex'>
                          {[...Array(5)].map((_, i) => (
                             <img key={i} src={getImage('misc/starBlack.png')} className='w-6' alt='rate-star' />
                          ))}
                        </div>
                      </div>
      
                      {/* Middle card */}
                      <p className='text-[15px] italic'>"{testimonials.review}"</p>
                      
                      {/* Bottom card */}
                      <div className='absolute bottom-7 left-7 flex justify-baseline items-center gap-3'>
                        <img src={getImage(testimonials.avatar)} className='w-12 h-12 rounded-full border-1 p-1' alt='customer-avatar' />
                        <div className='flex flex-col'>
                          <p className='text-16px'>{testimonials.name}</p>
                          <p className='text-10px tracking-wide -mt-1'>Project:{testimonials.project}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  ))}

              </Swiper>
              {/* Navigation button*/}
              <div className='flex justify-center mt-4 gap-5'>
                  <img src={getImage('misc/arrowBack.png')} onClick={() => swiperRef.current?.slidePrev()} className=' w-10 h-10 cursor-pointer active:opacity-75 bg-white rounded-full p-1' alt='arrow-back' />
                  <img src={getImage('misc/arrowForward.png')} onClick={() =>  swiperRef.current?.slideNext()} className=' w-10 h-10 cursor-pointer active:opacity-75 bg-white rounded-full p-1' alt='arrow-forward' />
              </div>

    </div>
  )
}

export default TestimonialSwiper