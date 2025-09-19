// i18n.js
import React, { createContext, useContext, useState } from "react";

const translations = {
  en: {
    name: "Melkyn Quintana",
    pronouns: "(He / Him)",
    profile_role: "Senior Astronomy Student",
    about_me: "About Me",
    about_me_paragraph:
      "I am a senior astronomy student with strong mathematics, physics, statistics, data analysis, and Python programming skills. Through my studies, I have acquired great learning and problem-solving skills, which allow me to adapt easily to new work and collaboration environments.",
    download_cv: "Download CV",
    education: "Education",
    bs_astronomy: "BS Astronomy",
    university: "University of Antioquia",
    skills_tech: "Skills & Technologies",
    projects: "Projects",
    switch_to_spanish: "Switch to Spanish",
    switch_to_english: "Switch to English",
    language: "Language",
    temp_message: "⚒️ Building...",
  },

  es: {
    name: "Melkyn Quintana",
    pronouns: "(Él)",
    profile_role: "Estudiante de Astronomía",
    about_me: "Sobre mí",
    about_me_paragraph:
      "Soy estudiante de último año de astronomía con sólidas habilidades en matemáticas, física, estadística, análisis de datos y programación en Python. A través de mis estudios he desarrollado grandes capacidades de aprendizaje y resolución de problemas, lo que me permite adaptarme con facilidad a nuevos entornos de trabajo y colaboración.",
    download_cv: "Descargar CV",
    education: "Educación",
    bs_astronomy: "Pregrado en Astronomía",
    university: "Universidad de Antioquia",
    skills_tech: "Habilidades y Tecnologías",
    projects: "Proyectos",
    switch_to_spanish: "Cambiar a Español",
    switch_to_english: "Cambiar a Inglés",
    language: "Idioma",
    temp_message: "⚒️ En construcción...",
  },
};

const I18nContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = (key) => (translations[lang] && translations[lang][key]) || key;
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useTranslation must be used inside LanguageProvider");
  }
  return ctx; // { lang, setLang, t }
}
