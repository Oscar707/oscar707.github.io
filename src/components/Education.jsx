import React from 'react';
import {  GraduationCap,  Calendar,   Crown,   Gamepad2,   Users } from 'lucide-react';

const EducationCard = ({ school, program, years, extraActivity, theme, icon }) => {
  const themes = {
    brebeuf: 'hover:bg-red-900',
    marianopolis: 'hover:bg-blue-400',
    mcgill: 'hover:bg-red-600'
  };

  return (
    <div className={`bg-gray-800 ${themes[theme]} p-6 rounded-lg transition-colors duration-300 flex-1`}>
      <h3 className="text-xl font-bold text-white mb-4">{school}</h3>
      
      <div className="flex items-center gap-2 text-gray-300 mb-3">
        <GraduationCap size={18} />
        <span>{program}</span>
      </div>

      <div className="flex items-center gap-2 text-gray-300 mb-3">
        <Calendar size={18} />
        <span>{years}</span>
      </div>

      <div className="flex items-center gap-2 text-gray-300">
        {icon}
        <span>{extraActivity}</span>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section className="w-full py-16 px-8 bg-gray-900 transition-colors duration-300 ease-in-out hover:bg-gray-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EducationCard 
            school="Brebeuf Highschool"
            program="IB program"
            years="2014 - 2019"
            extraActivity="Captain of Chess Team"
            theme="brebeuf"
            icon={<Crown size={18} />}  
          />

          <EducationCard 
            school="Marianopolis College"
            program="Pure and Applied Sciences"
            years="2019 - 2021"
            extraActivity="Jungler for the eSports team"
            theme="marianopolis"
            icon={<Gamepad2 size={18} />}
          />

          <EducationCard 
            school="McGill University"
            program="Major in Computer Science, Bachelor of Science"
            years="2021 - 2024"
            extraActivity="Member of Design Club"
            theme="mcgill"
            icon={<Users size={18} />}
          />
        </div>
      </div>
    </section>
  );
};

export default Education;