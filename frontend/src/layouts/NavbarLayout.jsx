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
    { label: 'My Account', to: '/login', delay: 0 },
    { label: 'My Cart', to: '/cart', delay: 0.9 },
    { label: 'My Project', to: '/login', delay: 1.1 },
  ];

  return (
    <div className="fixed top-0 z-50 h-12 flex justify-between items-center px-2.5 w-screen text-white text-lg">
      {/* Blur Background */}
      <div className="absolute top-0 left-0 right-0 w-full h-11 backdrop-blur-md bg-black/60 bg-opacity-70"></div>

      <div className="flex justify-between items-center py-3 w-screen text-white text-lg z-200">
        {/* Sidebar/Different component */}
        <img onClick={toggleSidebar} className="cursor-pointer z-1100" src={getImage('misc/whiteMenu.png')} />
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              variants={sideBarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`z-1000 w-[120px] fixed top-0 bottom-0 left-0 h-max text-center px-4 pt-[8px] transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-700`}>
              <motion.ul className="relative flex flex-col justify-left items-center mt-10 mb-5 gap-2 -ml-4 text-14px">
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
                      delay: item.delay, // Delay untuk animasi tiap item
                    }}
                  >
                    <NavLink
                      to={item.to}
                      className="flex justify-center w-[90px] border-2 py-1 px-2 text-[11px] bg-black border-white rounded-3xl active:bg-gray-800"
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
        <ul className="flex gap-5">
          <NavLink className="flex flex-col items-center" to="/">
            <hr className="hr-bg w-2/3 border-none h-[10px] bg-white hidden"></hr>
            <p>Home</p>
          </NavLink>

          <NavLink to="/service">
            Service
            <hr className="hr-bg w-2/3 border-none h-[2px] bg-white hidden"></hr>
          </NavLink>

          <NavLink to="/about">
            About
            <hr className="hr-bg w-2/3 border-none h-[2px] bg-white hidden"></hr>
          </NavLink>
        </ul>

        <Link to="/cart">
          <img src={getImage('misc/whiteCart.png')} />
        </Link>
      </div>
    </div>
  );
};

export default NavbarLayout;