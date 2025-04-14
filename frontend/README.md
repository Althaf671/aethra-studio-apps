# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





UNTUK MEMBUAT ANIMASI HOME PAGE CARD HANYA UNTUK MOBILE

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const ResponsiveCard = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [selected, setSelected] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleClick = () => {
    if (isMobile) {
      if (selected) {
        navigate('/detail-page')
      } else {
        setSelected(true)
        setTimeout(() => {
          // Optional: auto-reset if no second tap
          setSelected(false)
        }, 1500)
      }
    } else {
      navigate('/detail-page')
    }
  }

  return (
    <motion.div
      whileHover={!isMobile ? { scale: 1.05 } : {}}
      animate={selected ? { scale: 1.1 } : { scale: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onClick={handleClick}
      className='w-64 h-40 bg-red-500 rounded-xl shadow-lg flex items-center justify-center text-white cursor-pointer'
    >
      Tap or Hover Me
    </motion.div>
  )
}

export default ResponsiveCard