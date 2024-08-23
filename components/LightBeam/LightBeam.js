import { useCurrentPage } from '../CurrentPageProvider';
import { motion } from 'framer-motion';
import './LightBeam.css';

const LightBeam = () => {
  const { lightPos } = useCurrentPage();

  return (
    <motion.div
      className={`light-beam torch-${lightPos}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  );
};

export default LightBeam;
