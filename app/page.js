"use client"

import HomePage from '@/components/HomePage';
import { useCurrentPage } from '@/components/CurrentPageProvider';
import LightBeam from '@/components/LightBeam/LightBeam';

const page = () => {
  const { currentPage } = useCurrentPage();

  return (
    <>
      {currentPage === 'home' && (<HomePage />)}
      {currentPage === 'about' && (<h1>About Page</h1>)}
      <LightBeam />
    </>
  );
}

export default page