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
      "I'm constanting learning/reading about things like folks, enviroments and tech.",
    education: 'Education',
    software: 'Software Engineering',
    computer: 'Computer Engineering',
    tec: 'Computer Technologist',
    city_state: 'Joinville/Brazil',
    love_work: 'Love working with',
    love_content:
      'Full Stack development, Performance First, UX principles, Cloud native technologies, CI/CD',
    love_also: 'Also like',
    love_also_content: 'Mobile development, Functional programming',
    know_work: 'Knowledge',
    lang: 'Languages',
    learning: 'newbie learning for self study',
    database: 'Databases',
    platform: 'Platforms and Tools',
    services: 'and others services',
    others: 'Others',
    publication: 'Publications',
    exp: 'Experience',
    current: 'Current',
    exp1_position: 'Founder & Developer',
    exp1_desc:
      'Helping companies to find out where target audience, explore new markets, control the team flow, and sell more',
    lng_speak: 'Language',
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
      'Estou constantemente aprendendo/lendo sobre novas coisas como pessoas, ambientes de trabalho e tecnologia.',
    education: 'Educação',
    software: 'Engenharia de Software',
    computer: 'Engenharia da Computação',
    tec: 'Tecnólogo em Informática',
    city_state: 'Joinville/Brasil',
    love_work: 'Amo trabalhar com',
    love_content:
      'Desenvolvimento Full Stack, Performance First, Princípos UX, Tecnologias nativas da nuvem, CI/CD',
    love_also: 'Também gosto',
    love_also_content: 'Desenvolvimento mobile, Programação funcional',
    know_work: 'Conhecimento',
    lang: 'Linguagens',
    learning: 'estudando',
    database: 'Banco de dados',
    platform: 'Plataformas e ferramentas',
    services: 'e outros serviços',
    others: 'Outros',
    publication: 'Publicações',
    exp: 'Experiência',
    current: 'Atual',
    exp1_position: 'Fundador & Desenvolvedor',
    exp1_desc:
      'Ajudando as empresas a encontrar novos clientes, explorar novos mercados, controlar o fluxo de atividades do time, e vender mais',
    lng_speak: 'Língua',
    native: 'Nativo',
    intermediate: 'Avançado (ler, falar e escrever)',
    portuguese: 'Português',
    english: 'Inglês'
  }
};

export const LanguageContext = createContext([languages.en, () => {}]);
