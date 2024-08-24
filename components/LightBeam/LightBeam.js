import { useCurrentPage } from '../CurrentPageProvider';
import { motion } from 'framer-motion';
import './LightBeam.css';

const LightBeam = () => {
  const { lightPos } = useCurrentPage();

  // Define positions for corners
  const positions = {
    topLeft: { x: '-50%', y: '-50%' },
    topRight: { x: '0', y: '-50%' },
    bottomLeft: { x: '-50%', y: '0' },
    bottomRight: { x: '0', y: '0' },
  };

  // Get the current position based on lightPos
  const position = positions[lightPos] || positions.topLeft;

  return (
    <motion.div
      className="light-beam"
      initial={{ opacity: 0, x: position.x, y: position.y }}
      animate={{ opacity: 1, x: position.x, y: position.y }}
      transition={{ duration: 2, ease: 'easeInOut' }}
    />
  );
};

export default LightBeam;
