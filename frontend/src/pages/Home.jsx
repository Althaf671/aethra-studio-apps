import React from 'react'
import { Link } from 'react-router-dom'
import TopSection from '../components/home/TopSection'
import IntroductionSection from '../components/home/IntroductionSection'
import TestimonialSwiper from '../components/home/TestimonialSwiper'
import CatalogSection from '../components/home/CatalogSection'


const Home = () => {
  return (
    <div className=' flex flex-col'>
        <TopSection />
        <TestimonialSwiper />
        <CatalogSection />
        <IntroductionSection />
        
        {/* Login Form*/}
        <div className='flex text-center'></div>
    </div>
  )
}

export default Home