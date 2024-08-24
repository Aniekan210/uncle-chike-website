// app/page.js
"use client"

import HomePage from '@/components/HomePage';
import { useCurrentPage } from '@/components/CurrentPageProvider';
import LightBeam from '@/components/LightBeam/LightBeam';
import { AnimatePresence } from 'framer-motion';

const page = () => {
  const { currentPage } = useCurrentPage();

  return (
    <>
      <AnimatePresence mode='wait'>
        {currentPage === 'home' && (<HomePage />)}
        {currentPage === 'about' && (<h1>About Page</h1>)}
      </AnimatePresence>
      <LightBeam />
    </>
  );
}

export default page