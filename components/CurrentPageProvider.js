"use client"
import { useState, useContext, createContext } from 'react';

const CurrentPageContext = createContext();

const CurrentPageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </CurrentPageContext.Provider>
  )
}

export const useCurrentPage = () => {
  return useContext(CurrentPageContext);
}


export default CurrentPageProvider;