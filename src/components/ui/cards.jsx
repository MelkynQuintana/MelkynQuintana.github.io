import { FaGraduationCap } from "react-icons/fa";

export const InfoCard = ({ icon: Icon, title, subtitle }) => {
  return (
    <div
      className="flex items-center p-6 rounded-xl shadow-lg mr-6
                 hover:bg-transparent bg-neutral-800/75 border-2 border-transparent
                 hover:border-slate-500 hover:scale-105 transition-transform duration-200 relative z-11"
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-500 mr-4">
        <Icon className="w-5 h-5" />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};

export const SkillCard = ({ title }) => {
  return (
    <div
      className="flex items-center p-2 rounded-3xl shadow-lg mr-6
                 hover:bg-transparent bg-neutral-800/75 border-2 border-transparent
                 hover:border-slate-500 hover:scale-105 transition-transform duration-200 relative z-11"
    >

      {/* Text */}
      <div>
        <h3 className="text-lg text-white">{title}</h3>
      </div>
    </div>
  );
};


export const ProjectCard = ({ title }) => {
  return (
    <div
      className="w-80 h-120 flex items-center justify-center 
                 p-2 rounded-3xl shadow-lg mr-6
                 hover:bg-transparent bg-neutral-800/75 border-2 border-transparent
                 hover:border-slate-500 hover:scale-105 
                 transition-transform duration-200 relative z-11"
    >
      {/* Text */}
      <h3 className="text-lg text-white">{title}</h3>
    </div>
  );
};
