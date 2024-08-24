"use client"
import './NavBar.css'
import { useCurrentPage } from "../CurrentPageProvider"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'


const NavBar = () => {
  const { currentPage } = useCurrentPage();
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setIsHome(currentPage === '/' ? true : false);
  }, [currentPage]);

  return (
    <motion.div
      className='navbar'
      initial={{ top: -100, opacity: 0 }}
      animate={isHome ? { top: 0, opacity: 1, left: '50%', boxShadow: '0 0 10px #0000004b' } : { top: 0, opacity: 1, left: '50%', boxShadow: 'none' }}
      transition={{ delayChildren: 0, duration: 0.2, ease: 'easeInOut' }}
    >
      <NavLink active={false} isHome={isHome} href='/'>Home</NavLink>
      <NavLink active={currentPage === '/about'} isHome={isHome} href='/about'>About</NavLink>
      <NavLink active={currentPage === '/works'} isHome={isHome} href='/works'>Works</NavLink>
      <NavLink active={currentPage === '/contact'} isHome={isHome} href='/contact'>Contact</NavLink>
    </motion.div>
  )
}

const NavLink = ({ children, href, isHome, active }) => {
  const { setCurrentPage, setLightPos, lightPos } = useCurrentPage();

  const route = () => {
    setTimeout(() => {
      setCurrentPage(href);
      console.log(href);
    }, 500);
    const arr = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
    const choices = arr.filter((p) => p !== lightPos);
    const randomIndex = Math.floor(Math.random() * choices.length);
    setLightPos(choices[randomIndex]);
  }

  return (
    <motion.button
      className='nav-item'
      onClick={route}
      initial={false}
      animate={isHome ? { boxShadow: 'none', borderRadius: 0, marginLeft: 0, marginRight: 0, padding: '10px 18px' } : active ? { boxShadow: '0 0 10px #0000004b', borderRadius: 16, marginLeft: 4, marginRight: 4, padding: '10px 30px' } : { boxShadow: '0 0 10px #0000004b', borderRadius: 16, marginLeft: 4, marginRight: 4, padding: '10px 18px' }}
      transition={{ duration: 0.1, ease: 'easeIn' }}
    >{children}</motion.button>
  );
}

export default NavBar