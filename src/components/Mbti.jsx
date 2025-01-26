import React from 'react';
import { Info } from 'lucide-react';

const Mbti = () => {
  const traits = [
    { 
      letter: 'I', 
      fullName: 'Introverted',
      percentage: 87,
      description: "Introverts prefer calm, minimally stimulating environments. They excel in roles requiring deep focus and independent work. "
    },
    { 
      letter: 'N', 
      fullName: 'Intuitive',
      percentage: 54,
      description: "Intuitive individuals focus on abstract concepts and future possibilities. Their ability to see patterns and potential makes them valuable in roles requiring creativity and long-term vision."
    },
    { 
      letter: 'F', 
      fullName: 'Feeling',
      percentage: 54,
      description: "Feeling types prioritize emotions and values in decision-making. They excel in roles requiring empathy, interpersonal skills, and understanding human dynamics."
    },
    { 
      letter: 'P', 
      fullName: 'Prospecting',
      percentage: 61,
      description: "Prospecting types are flexible and adaptable, preferring to keep their options open. They excel in roles requiring spontaneity and quick adaptation to change."
    },
    { 
      letter: 'T', 
      fullName: 'Turbulent',
      percentage: 64,
      description: "Turbulent individuals are self-conscious and sensitive to stress. Their constant self-reflection and desire for improvement often leads to personal growth and refined work quality."
    }
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-6 text-center"> The Mediator INFP-T</h2>
      <div className="space-y-6">
        {traits.map((trait, index) => (
          <div key={index} className="relative">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-white">{trait.fullName}</span>
                <div className="group relative">
                  <Info className="h-4 w-4 text-gray-400 hover:text-white cursor-help transition-colors" />
                  <div className="absolute left-0 top-6 scale-0 transition-all rounded bg-gray-700 p-2 text-xs text-white group-hover:scale-100 w-64 z-10">
                    <p className="font-semibold mb-1">{trait.fullName}</p>
                    <p>{trait.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${trait.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mbti;