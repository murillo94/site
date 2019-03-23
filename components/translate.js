import React, { useContext } from 'react';

import ButtonOption from './buttonOption';

import { LanguageContext } from '../contexts/language';

export default function() {
  const [language, setLanguage] = useContext(LanguageContext);

  const handleClick = () => {
    setLanguage(language === 'en' ? 'ptbr' : 'en');
  };

  return (
    <ButtonOption onClick={handleClick}>
      {language === 'en' ? <>&#x1F1FA;&#x1F1F8;</> : <>&#x1F1E7;&#x1F1F7;</>}
    </ButtonOption>
  );
}
