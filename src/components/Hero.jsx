import React from 'react';
import Mbti from './Mbti';

const Hero = () => {
  return (
    <section className="min-h-[50vh] bg-slate-800 px-8 flex flex-col justify-center">
      <br></br>
      <div className="max-w-7xl mx-auto w-full flex gap-8">
        <div className="w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold">
            <br></br>
            <span className="text-white">Recent graduate motivated by learning and problem solving</span>
          </h1>
        </div>
        <div className="w-1/3">
          <Mbti />
        </div>
      </div>
      <br></br>
    </section>
  );
};

export default Hero;