import React, { useContext } from 'react';

import { LanguageContext } from '../contexts/language';

export default function() {
  const [language, setLanguage] = useContext(LanguageContext);

  const handleClick = () => {
    setLanguage(language === 'en' ? 'ptbr' : 'en');
  };

  return (
    <div>
      {language === 'en' ? (
        <a onClick={handleClick}>&#x1F1FA;&#x1F1F8;</a>
      ) : (
        <a onClick={handleClick}>&#x1F1E7;&#x1F1F7;</a>
      )}

      <style jsx>{`
        div {
          float: right;
          clear: both;
          margin-top: 20px;
        }

        a {
          font-size: 18px;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #eee;
          border-radius: 100%;
          transition: all 0.2s;
          will-change: auto;
          width: 2.6em;
          height: 2.6em;
          cursor: pointer;
          user-select: none;
        }

        @media (min-width: 768px) {
          a {
            font-size: 22px;
          }

          a:hover {
            background-color: #dedede;
            transform: scale(1.15);
          }
        }

        @media print {
          a {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
