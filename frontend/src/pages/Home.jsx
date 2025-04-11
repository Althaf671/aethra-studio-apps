import React from 'react'
import { Link } from 'react-router-dom'
import SwiperHome from '../components/home/SwiperHome'

const Home = () => {
  return (
    <div className=' flex flex-col'>
        <SwiperHome />
        
        {/* Login Form*/}
        <div className='flex text-center'></div>
    </div>
  )
}

export default Home