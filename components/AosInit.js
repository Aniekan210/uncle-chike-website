"use client"

import { useEffect } from 'react';
import AOS from 'aos';

const AosInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    console.log('AOS Initialized');
  }, []);

  return (
    <></>
  );
}

export default AosInit;