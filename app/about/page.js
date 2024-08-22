import { motion } from 'framer-motion';
import Link from 'next/link';

const pageVariants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
};

const page = () => {
    return (
        <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
    >
        <nav>
        <Link href="/">Go to Home Page</Link>
        </nav>
        <h1>About Page</h1>
        <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
        >
        This is the About Page!
        </motion.p>
    </motion.div>
    );
}

export default page;