"use client"
import { useState, useContext, createContext } from 'react';

const CurrentPageContext = createContext();

const CurrentPageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [lightPos, setLightPos] = useState('top-left');


  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage, lightPos, setLightPos }}>
      {children}
    </CurrentPageContext.Provider>
  )
}

export const useCurrentPage = () => {
  return useContext(CurrentPageContext);
}


export default CurrentPageProvider;