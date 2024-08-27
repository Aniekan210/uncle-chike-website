"use client"
import './NavBar.css'
import { useCurrentPage } from "../CurrentPageProvider"
import { motion } from 'framer-motion'
import useDeviceType from '@/hooks/useDeviceType'


const NavBar = () => {
  const { currentPage } = useCurrentPage();

  return (
    <motion.div className='navDiv' >
      <motion.div
        className='navbar'
        initial={{ top: -100, opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        animate={{ top: 0, opacity: 1, left: '50%', boxShadow: 'none' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <NavLink active={false} href='/'>Home</NavLink>
        <NavLink active={currentPage === '/about'} href='/about'>About</NavLink>
        <NavLink active={currentPage === '/experience'} href='/experience'>Experience</NavLink>
        <NavLink active={currentPage === '/works'} href='/works'>Works & Gallery</NavLink>
        <NavLink active={currentPage === '/contact'} href='/contact'>Contact</NavLink>
      </motion.div>
    </motion.div>
  )
}

const NavLink = ({ children, href, active }) => {
  const { setCurrentPage, setLightPos, lightPos } = useCurrentPage();
  const deviceType = useDeviceType();

  const route = () => {
    setTimeout(() => {
      setCurrentPage(href);
    }, 500);
    const arr = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
    const choices = arr.filter((p) => p !== lightPos);
    const randomIndex = Math.floor(Math.random() * choices.length);
    setLightPos(choices[randomIndex]);
  }

  return (
    <motion.button
      className={active ? 'nav-item active' : 'nav-item'}
      onClick={route}
      initial={false}
      animate={active ? deviceType === 'largeDesktop' ? { border: 'none', padding: '10px 80px' } : { border: 'none', padding: '10px 60px' } : deviceType === 'largeDesktop' ? { border: 'none', padding: '10px 30px' } : { border: 'none', padding: '10px 16px' }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >{children}</motion.button>
  );
}

export default NavBar