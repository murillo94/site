import React, { useContext } from 'react';

import { Button } from './button';

import { LanguageContext } from '@contexts/language';

export const Translate = () => {
  const [language, setLanguage] = useContext(LanguageContext);

  const handleClick = () => {
    setLanguage(language === 'en' ? 'ptbr' : 'en');
  };

  return (
    <Button onClick={handleClick} ariaLabel="Translate">
      {language === 'en' ? <>&#x1F1FA;&#x1F1F8;</> : <>&#x1F1E7;&#x1F1F7;</>}
    </Button>
  );
};
