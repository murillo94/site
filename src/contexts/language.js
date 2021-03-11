import { createContext } from 'react';

import personalData from '@/data/personal';
import educationData from '@/data/education';
import knowledgeData from '@/data/knowledge';
import jobsData from '@/data/jobs';
import languagesData from '@/data/languages';

import personalTranslations from '@/translations/personal';
import educationTranslations from '@/translations/education';
import knowledgeTranslations from '@/translations/knowledge';
import publicationsTranslations from '@/translations/publications';
import jobsTranslations from '@/translations/jobs';
import languageTranslations from '@/translations/languages';

const getTexts = language => ({
  ...personalData[language],
  ...personalTranslations[language],
  ...educationData[language],
  ...educationTranslations[language],
  ...knowledgeData[language],
  ...knowledgeTranslations[language],
  ...publicationsTranslations[language],
  ...jobsData[language],
  ...jobsTranslations[language],
  ...languagesData[language],
  ...languageTranslations[language]
});

export const languages = {
  en: getTexts('en'),
  ptbr: getTexts('ptbr')
};

export const LanguageContext = createContext([languages.en, () => {}]);
