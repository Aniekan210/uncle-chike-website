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
      animate={isHome ? { top: 0, opacity: 1, left: '50%' } : { top: 0, opacity: 1, left: '70%' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <NavLink href='/'>Home</NavLink>
      <NavLink href='/about'>About</NavLink>
      <NavLink href='/works'>Works</NavLink>
      <NavLink href='/contact'>Contact</NavLink>
    </motion.div>
  )
}

const NavLink = ({ children, href }) => {
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
    <button className='nav-item current' onClick={route}>{children}</button>
  );
}

export default NavBar