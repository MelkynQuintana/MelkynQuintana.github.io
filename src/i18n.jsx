// i18n.js
import React, { createContext, useContext, useState } from "react";

const translations = {
  en: {
    name: "Melkyn Quintana",
    pronouns: "(He / Him)",
    profile_role: "Senior Astronomy Student",
    about_me: "About Me",
    about_me_paragraph: (
    <>
    I'm an astronomy graduate from the University of Antioquia with a strong foundation in
    mathematics, physics, statistics, and scientific computing. My research focuses on
    cosmological parameter estimation using Type Ia Supernovae data — specifically exploring
    the Hubble tension through Bayesian inference and MCMC methods.
    <br />
    I am passionate about understanding the large-scale structure of the universe, and how
    the data can reveal so much information both in science and in matters of daily life.
    </>
    ),
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
    about_me_paragraph: (
    <>
    Soy astrónomo de la Universidad de Antioquia, cuento con una sólida formación en
    matemáticas, física, estadística e informática científica. Mi investigación se centra en
    la estimación de parámetros cosmológicos utilizando datos de supernovas de tipo Ia, explorando específicamente
    la tensión de Hubble mediante inferencia bayesiana y métodos MCMC.
    <br />
    Me apasiona comprender la estructura a gran escala del universo y cómo
    un buen analisis y tratamiento de los datos pueden revelar tanta información tanto en la ciencia como en la vida cotidiana.
    </>
    ),
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
