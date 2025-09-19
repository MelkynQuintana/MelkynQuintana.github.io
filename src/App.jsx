/**
 * @copyright Melkyn Quintana 2025
 * @license Apache-2.0
 */

"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./components/ui/resizable-navbar";
import { useState } from "react";

import React from "react";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";
import { DownloadButton, GradientButton } from "./components/ui/buttons"; 
import { InfoCard, SkillCard, ProjectCard } from "./components/ui/cards";
import { FaGithub, FaLinkedin, FaEnvelope, FaAddressCard, FaGraduationCap, FaCode, FaCodeBranch } from "react-icons/fa";
import { useTranslation } from "./i18n";
import { LanguageToggleButton } from "./components/ui/translation-button";

export function NavbarDemo() {

  const { lang, setLang, t } = useTranslation();

  const navItems = [
    { name: t("projects"), link: "#projects" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Outer wrapper is positioned but transparent — background goes to inner NavBody */}
      <Navbar className="fixed top-0 left-0 w-full z-50">
        {/* Desktop Navigation (centered pill with background) */}
        <NavBody className="hidden md:flex items-center justify-between px-6 py-4">
          <NavbarLogo />
          <NavItems items={navItems} />
          <LanguageToggleButton className="ml-4" />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="md:hidden px-4 py-3">
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >

            {/* Language toggle row */}
            <div className="px-4 py-2 border-b border-slate-700 flex justify-between items-center w-full">
              <span className="text-neutral-600 text-sm">{t("language")}</span>
              <LanguageToggleButton />
            </div>

            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 px-4 text-neutral-200 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <div className="bg-neutral-900 flex flex-col items-center justify-center relative w-full">
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Profile Section (First Column)*/}

          <div className="flex flex-col items-center justify-items-center text-center md:ml-30 mt-30">
            <img
              src="/images/profile.jpeg" // <-- replace with your image path
              alt="My Profile"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white mb-4">
              Melkyn Quintana
            </h2>
            <h6 className="text-md md:text-lg text-gray-500 max-w-md">
              {t("pronouns")}
            </h6>
            <h3 className="mt-3 text-2xl font-bold md:text-lg text-gray-300 max-w-md">
              {t("profile_role")}
            </h3>
            <h4 className="mt-3 text-md font-bold md:text-lg text-gray-400 max-w-md">
              {t("university")}
            </h4>

            <div className="flex mt-10 gap-6">
              <GradientButton icon={FaEnvelope} variant="gmail" onClick={() => window.location.href = "mailto:melkyn.quintana@gmail.com"} />
              <GradientButton icon={FaLinkedin} variant="linkedin" onClick={() => window.open("https://www.linkedin.com/in/melkynquintana", "_blank")} />
              <GradientButton icon={FaGithub} variant="github" onClick={() => window.open("https://github.com/MelkynQuintana", "_blank")} />
            </div>

          </div>

          {/* About Me Section (Second and Third Column) */}

          <div className="col-span-2 ml-6 md:ml-0 md:mr-60 mt-20">

            <div className="flex items-center gap-3">
              {/* Circle around icon */}
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center">
                <FaAddressCard className="text-white w-5 h-5" />
              </div>

              {/* Text */}
              <h2 className="text-3xl font-bold text-white">
                {t("about_me")}
              </h2>
            </div>

            <p className="mt-4 text-lg text-gray-300">
              {t("about_me_paragraph")}
            </p>

            <div className="mt-8 flex items-center justify-center">
              <DownloadButton
                onClick={() =>
                  window.open(
                    lang === "en"
                      ? "/CV_MelkynQuintana_EN.pdf"
                      : "/CV_MelkynQuintana_ES.pdf",
                    "_blank"
                  )
                }
              />
            </div>

            <div className="mt-8 flex items-center gap-3">
              {/* Circle around icon */}
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center">
                <FaGraduationCap className="text-white w-5 h-5" />
              </div>

              {/* Text */}
              <h2 className="text-3xl font-bold text-white">
                {t("education")}
              </h2>
            </div>

            <div className="mt-4">
              <InfoCard
                icon={FaGraduationCap}
                title={t("bs_astronomy")}
                subtitle={t("university")}
              />
            </div>

            <div className="mt-8 flex items-center gap-3">
              {/* Circle around icon */}
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center">
                <FaCode className="text-white w-5 h-5" />
              </div>

              {/* Text */}
              <h2 className="text-2xl font-bold text-white">
                {t("skills_tech")}
              </h2>

            </div>

            <div className="mt-4 mb-8 flex flex-wrap gap-x-0.5 gap-y-3">
              <SkillCard title="Python" />
              <SkillCard title="C" />
              <SkillCard title="SQL" />
              <SkillCard title="Power BI" />
              <SkillCard title="Pandas" />
              <SkillCard title="Statistics" />
              <SkillCard title="MCMC" />
              <SkillCard title="SciPy" />
              <SkillCard title="Git" />
              <SkillCard title="Latex" />
              <SkillCard title="N-Body Simulations" />
              <SkillCard title="Data Analysis" />
              <SkillCard title="JavaScript" />
              <SkillCard title="React" />
              <SkillCard title="Bash" />
            </div>

          </div>

        </div>

        <ShootingStars />
        <StarsBackground />
      </div>
    </>
  );
}

function App() {

  const { lang, setLang, t } = useTranslation();

  return (
    <div>
      <NavbarDemo />
      {/* Sections */}
      <section
        id="projects"
        className="w-full bg-neutral-800 px-30 pt-14"
      >
        <div className="flex items-center gap-4">
          {/* Circle around icon */}
          <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center">
            <FaCodeBranch className="text-white w-5 h-5" />
          </div>

          {/* Text */}
          <h1 className="text-3xl font-bold text-white">
            {t("projects")}
          </h1>

        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mb-30"> 
          <ProjectCard title={t("temp_message")} />
          <ProjectCard title={t("temp_message")} />
          <ProjectCard title={t("temp_message")} />
        </div>

      </section>
    </div>
  );
}

export default App;
