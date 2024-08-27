"use client"
import styles from './MobileNavBar.module.css'
import { useCurrentPage } from "../CurrentPageProvider"
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'


const MobileNavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <motion.div className={styles.navDiv} >
      <motion.button onClick={() => setSidebarOpen(true)} className={styles.dropBtn}>
        <motion.div
          className={styles.dropdown}
          initial={{ right: -100, opacity: 0 }}
          animate={{ right: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </motion.button>
      <AnimatePresence>
        {sidebarOpen && (<SideBar setSidebarOpen={setSidebarOpen} />)}
      </AnimatePresence>
    </motion.div>
  )
};

const SideBar = ({ setSidebarOpen }) => {
  return (
    <motion.div
      className={styles.sideBar}
      initial={{ top: '-100%', opacity: 0 }}
      animate={{ top: '0', opacity: 1 }}
      exit={{ top: '-100%', opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className={styles.closeContainer}>
        <button onClick={() => setSidebarOpen(false)} className={styles.closeBtn}>X</button>
      </div>
      <div className={styles.linkContainer}>
        <NavLink setSidebarOpen={setSidebarOpen} href='/'>Home</NavLink>
        <NavLink setSidebarOpen={setSidebarOpen} href='/about'>About</NavLink>
        <NavLink setSidebarOpen={setSidebarOpen} href='/experience'>Experience</NavLink>
        <NavLink setSidebarOpen={setSidebarOpen} href='/works'>Works & Gallery</NavLink>
        <NavLink setSidebarOpen={setSidebarOpen} href='/contact'>Contact</NavLink>
      </div>
    </motion.div>
  );
};

const NavLink = ({ setSidebarOpen, children, href }) => {
  const { setCurrentPage, setLightPos, lightPos } = useCurrentPage();

  const route = () => {
    setSidebarOpen(false);
    setTimeout(() => {
      setCurrentPage(href);
    }, 500);
    const arr = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
    const choices = arr.filter((p) => p !== lightPos);
    const randomIndex = Math.floor(Math.random() * choices.length);
    setLightPos(choices[randomIndex]);
  }

  return (
    <button onClick={route} className={styles.navItem}>{children}</button>
  );
}

export default MobileNavBar