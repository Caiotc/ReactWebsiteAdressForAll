import React, { createContext, useState, useContext } from 'react';

import {BR, EN} from '../assets/languages';

const LanguageStateContext = createContext({});

const LanguageStateProvider = ({ children }) => {
  const [languageState, setLanguageState] = useState({
    BR,
    EN,
  });


  return (
    <LanguageStateContext.Provider
      value={{languageState}}
    >
      {children}
    </LanguageStateContext.Provider>
  );
};

function useLanguageState(){
  const context = useContext(LanguageStateContext);

  if (!context) {
    throw new Error('useLanguageState must be used within an LanguageStateProvider');
  }

  return context;
}

export { LanguageStateProvider, useLanguageState };
