import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavbar } from '../context/useNavbarContext';
import getImage from '../assets/misc/assetsLoader';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarLayout = () => {

  // To control nav
  const { isNavbarVisible } = useNavbar();
  if (!isNavbarVisible) return null;

  // To control sidebar menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(prev => !prev);

  // Staggered Animation
  const sideBarVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 30,
        when: 'beforeChildren',
        staggerChildren: 0.15,
      },
    },
    exit: {
      x: '-100%',
      opacity: 0,
      transition: { when: 'afterChildren' },
    }
  };

  const sideBarItems = [
    { label: 'Profile', to: '/login', delay: 0 },
    { label: 'Saved', to: '/cart', delay: 0.5 },
    { label: '🇬🇧 | 🇮🇩', to: '/login', delay: 0.7 },
  ];

  return (
    <div className="fixed top-0 z-500 h-12 flex justify-between items-center px-2.5 w-screen text-white text-lg select-none">
      {/* Blur Background */}
      <div className="absolute top-0 left-0 right-0 w-full h-11 backdrop-blur-md bg-black/60 bg-opacity-70"></div>

      <div className="flex justify-between items-center py-3 w-screen text-white text-lg z-200">
        {/* Sidebar/Different component */}
        <img onClick={toggleSidebar} className="cursor-pointer z-1100 pointer-events-auto " src={getImage('misc/whiteMenu.png')} />
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              variants={sideBarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`z-1000 max-w-[130px] fixed top-0 bottom-0 left-0 h-max text-center px-5 mt-12 ml-2 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-700`}>
              {/* Blur Background */}
              <div className="absolute top-0 left-0 right-0 w-full h-38 backdrop-blur-md bg-white/5 bg-opacity-50 rounded-3xl" ></div>
              <motion.ul className="relative flex flex-col justify-left items-center mt-4 mb-3 gap-3 text-14px">
                {sideBarItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit="exit"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                      delay: item.delay, 
                    }}
                  >
                    <NavLink
                      to={item.to}
                      className="sidebar-li-border flex justify-center min-w-[90px] text-[11.5px] active:bg-gray-800"
                    >
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Bar */}
        <ul className="poppins flex gap-5 text-[15px]">
          <NavLink className="flex flex-col items-center" to="/">
            <p>HOME</p>
            <hr className="hr-bg w-6 border-none h-[2px] bg-white hidden"></hr>
          </NavLink>

          <NavLink to="/service" className="flex flex-col items-center">
            <p>SERVICE</p>
            <hr className="hr-bg w-6 border-none h-[2px] bg-white hidden"></hr>
          </NavLink>

          <NavLink to="/about" className="flex flex-col items-center">
            <p>ABOUT</p>
            <hr className="hr-bg w-6 border-none h-[2px] bg-white hidden"></hr>
          </NavLink>
        </ul>

        <Link to="/cart" className="flex flex-col items-center">
          <img src={getImage('misc/whiteCart.png')} />
        </Link>
      </div>
    </div>
  );
};

export default NavbarLayout;