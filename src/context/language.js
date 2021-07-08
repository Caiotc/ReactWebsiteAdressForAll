import React, { createContext, useCallback, useState, useContext } from 'react';

const LanguageContext = createContext({});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('BR');

  const setAppLanguage = useCallback((selectedLanguage) => {
    setLanguage(selectedLanguage);
  }, []);

  return (
    <LanguageContext.Provider
      value={{language, setAppLanguage}}
    >
      {children}
    </LanguageContext.Provider>
  );
};

function useLanguage(){
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within an LanguageProvider');
  }

  return context;
}

export { LanguageProvider, useLanguage };
