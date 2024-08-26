"use client"
import styles from './MobileNavBar.module.css'
import { useCurrentPage } from "../CurrentPageProvider"
import { motion } from 'framer-motion'


const MobileNavBar = () => {
  const { currentPage } = useCurrentPage();

  return (
    <motion.div className={styles.navDiv} >
      <motion.div
        className={styles.dropdown}
        initial={{ right: -100, opacity: 0 }}
        animate={{ right: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        Mobile
      </motion.div>
    </motion.div>
  )
}

const NavLink = ({ children, href, active }) => {
  const { setCurrentPage, setLightPos, lightPos } = useCurrentPage();

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
      className={styles.navItem}
      onClick={route}
      initial={false}
      animate={false}
      transition={{ duration: 0.1, ease: 'easeInOut' }}
    >{children}</motion.button>
  );
}

export default MobileNavBar