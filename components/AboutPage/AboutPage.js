import { motion } from "framer-motion";
import styles from './AboutPage.module.css';
import Image from "next/image";
import useDeviceType from "@/hooks/useDeviceType";

const AboutPage = () => {
  const deviceType = useDeviceType();

  return (
    <motion.div
      className={styles.aboutContainer}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className={styles.imageWrapper}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {deviceType !== 'mobile' && (<Image
          src={'/images/chike.jpg'}
          alt="Chike"
          layout="responsive"
          width={400}
          height={600}
          className={styles.image}
          priority
        />)}
      </motion.div>

      <motion.div
        className={styles.textCont}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Who is Chike?
        </motion.h1>
        <motion.p>
          From a young age, I was the kid always lost in a book or glued to the TV, captivated by great storytelling. This passion for unique narratives has been with me for as long as I can remember, driving my purpose to bring inspiring and unforgettable stories to the world.
        </motion.p>
        <motion.p>
          Since 2009, I've immersed myself in a diverse range of projects, from advertising campaigns to film ventures, constantly pushing my creative boundaries. Now based in Lagos, Nigeria, I thrive on collaboration and exploring new creative opportunities.
        </motion.p>
        <motion.p>
          A Marketing graduate from Kennesaw State University, GA, USA, I spent several years at DDB Lagos and Insight Publicis in various leadership roles. I'm deeply committed to finding opportunities that challenge me to innovate and infuse fresh ideas into every project.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
