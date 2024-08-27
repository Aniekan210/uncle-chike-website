import { motion } from "framer-motion"
import styles from './AboutPage.module.css'
import Image from "next/image"
import useDeviceType from "@/hooks/useDeviceType"

const AboutPage = () => {
  const deviceType = useDeviceType();
  return (
    <motion.div
      className={styles.aboutContainer}
    >
      {deviceType === 'mobile' && (<h1>Who is Chike?</h1>)}
      <Image
        src={'/images/chike.jpg'}
        width={400}
        height={600}
      />
      <motion.div className={styles.textCont}>
        {deviceType !== 'mobile' && (<h1>Who is Chike?</h1>)}
        <motion.p>From a young age, I was the kid always lost in a book or glued to the TV, captivated by great storytelling. This passion for unique narratives has been with me for as long as I can remember, driving my purpose to bring inspiring and unforgettable stories to the world.</motion.p>
        <motion.p>Since 2009, I've immersed myself in a diverse range of projects, from advertising campaigns to film ventures, constantly pushing my creative boundaries. Now based in Lagos, Nigeria, I thrive on collaboration and exploring new creative opportunities.</motion.p>
        <motion.p>A Marketing graduate from Kennesaw State University, GA, USA, I spent several years at DDB Lagos and Insight Publicis in various leadership roles. I'm deeply committed to finding opportunities that challenge me to innovate and infuse fresh ideas into every project.</motion.p>
      </motion.div>

    </motion.div>
  )
}

export default AboutPage