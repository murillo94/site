import { createContext } from 'react';

export const languages = {
  en: {
    title: "Murillo's Resume",
    city: 'Joinville, SC, Brazil',
    code: 'codes and contributions',
    translation: 'translations',
    first_intro:
      'I have a experience ranging React, React Native, AngularJS to doing stuffs in backend with NodeJS, Python, Java.',
    second_intro:
      "I'm constanting learning/reading about things like folks, enviroments and tech. Let's learn together.",
    education: 'Education',
    software: 'Software Engineering',
    computer: 'Computer Engineering',
    tec: 'Computer Technologist',
    city_state: 'Joinville/Brazil',
    love_work: 'Love work with',
    love_content:
      'Full Stack development, Mobile development, Performance First, UX principles, Functional programming and new challenges',
    know_work: 'Also know',
    lang: 'Languages',
    learning: 'newbie learning for self study',
    database: 'Databases',
    platform: 'Platforms and Tools',
    services: 'and others services',
    others: 'Others',
    exp: 'Experience',
    current: 'Current',
    exp1_position: 'Founder & Developer',
    exp1_desc:
      'Helping companies to find out where target audience, explore new markets, control the team flow, and sell more',
    lng_speak: 'Languages',
    native: 'Native',
    intermediate: 'Advanced (reading, speaking and writing)',
    portuguese: 'Portuguese',
    english: 'English'
  },
  ptbr: {
    title: 'Resumo do Murillo',
    city: 'Joinville, SC, Brasil',
    code: 'códigos e contribuições',
    translation: 'traduções',
    first_intro:
      'Tenho experiência desde React, React Native, AngularJS até desenvolvimento no backend com NodeJS, Python, Java.',
    second_intro:
      'Estou constantemente aprendendo/lendo sobre novas coisas como pessoas, ambientes de trabalho e tecnologia. Vamos aprender juntos.',
    education: 'Educação',
    software: 'Engenharia de Software',
    computer: 'Engenharia da Computação',
    tec: 'Tecnólogo em Informática',
    city_state: 'Joinville/Brasil',
    love_work: 'Amo trabalhar com',
    love_content:
      'Desenvolvimento Full Stack, Desenvolvimento mobile, Performance First, Princípos UX, Programação funcional e novos desafios',
    know_work: 'Também tenho conhecimento',
    lang: 'Linguagens',
    learning: 'estudando',
    database: 'Banco de dados',
    platform: 'Plataformas e ferramentas',
    services: 'e outros serviços',
    others: 'Outros',
    exp: 'Experiência',
    current: 'Atual',
    exp1_position: 'Fundador & Desenvolvedor',
    exp1_desc:
      'Ajudando as empresas a encontrar novos clientes, explorar novos mercados, controlar o fluxo de atividades do time, e vender mais',
    lng_speak: 'Línguas',
    native: 'Nativo',
    intermediate: 'Avançado (ler, falar e escrever)',
    portuguese: 'Português',
    english: 'Inglês'
  }
};

export const LanguageContext = createContext([languages.en, () => {}]);
