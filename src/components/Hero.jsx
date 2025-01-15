import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[50vh] bg-gray-900 transition-colors duration-300 ease-in-out hover:bg-gray-800 px-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="text-yellow-400 block mb-4">Oscar</span>
          <span className="text-white">Recent graduate motivated by learning and problem solving</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;