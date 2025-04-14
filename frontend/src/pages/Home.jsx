import React from 'react'
import { Link } from 'react-router-dom'
import SwiperHome from '../components/home/SwiperHome'
import TopSection from '../components/home/TopSection'


const Home = () => {
  return (
    <div className=' flex flex-col'>
        <TopSection />
        <SwiperHome />
        
        {/* Login Form*/}
        <div className='flex text-center'></div>
    </div>
  )
}

export default Home