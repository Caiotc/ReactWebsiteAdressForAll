import React from 'react';

import { LanguageProvider } from './language';
import { LanguageStateProvider } from './languageState';

const AppProvider = ({ children }) => {
  return (
      <LanguageStateProvider>
        <LanguageProvider>
            {children}
        </LanguageProvider>
      </LanguageStateProvider>

  );
};

export default AppProvider;