import React from "react";
import { FaFileDownload } from "react-icons/fa";

export const GradientButton = ({ icon: Icon, variant = "indigo", onClick, className = "" }) => {
  const gradients = {
    indigo: "from-indigo-500 to-purple-500",
    gmail: "from-red-500 via-yellow-400 via-green-500 to-blue-500",
    linkedin: "from-blue-600 via-blue-500 to-cyan-400",
    github: "from-green-500 via-gray-700 to-gray-900",
    // ...etc
  };
  const grad = gradients[variant] ?? gradients.indigo;

  return (
    <div className={`p-[3px] relative rounded-full w-14 h-14 ${className}`}>
      {/* gradient background behind (non interactive) */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 rounded-full bg-gradient-to-r ${grad} transform hover:scale-105 pointer-events-none z-0`}
      />

      {/* real button: hover:bg-transparent will always fire here */}
      <button
        onClick={onClick}
        className="w-full h-full rounded-full relative flex items-center justify-center 
                   text-white bg-neutral-900 transform hover:scale-105 hover:bg-transparent transition-colors duration-300 z-10"
      >
        {Icon && <Icon className="w-6 h-6" />}
      </button>
    </div>
  );
};


export const DownloadButton = ({ onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-2 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center gap-2 transition transform duration-200 hover:scale-105 hover:bg-neutral-300 hover:text-neutral-950 border-2 border-transparent hover:border-slate-900 relative z-10 ${className}`}
    >
      <FaFileDownload className="w-5 h-5" />
      <span>Download CV</span>
    </button>
  );
};
