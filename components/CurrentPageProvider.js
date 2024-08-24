"use client"
import { useState, useContext, createContext } from 'react';

const CurrentPageContext = createContext();

const CurrentPageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('/');
  const [lightPos, setLightPos] = useState('topLeft');


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