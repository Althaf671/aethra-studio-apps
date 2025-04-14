import React from 'react'
import { Link } from 'react-router-dom'
import SwiperHome from '../components/home/SwiperHome'
import TopSection from '../components/home/TopSection'
import IntroductionSection from '../components/home/IntroductionSection'


const Home = () => {
  return (
    <div className=' flex flex-col'>
        <TopSection />
        <IntroductionSection />
        <SwiperHome />
        
        {/* Login Form*/}
        <div className='flex text-center'></div>
    </div>
  )
}

export default Home