import React from 'react';
import Tilt from 'react-parallax-tilt';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="halo"></div>
      <Tilt
        perspective={1500}
        glareEnable={true}
        glareMaxOpacity={0.3}
        glarePosition="all"
        scale={1.05}
        className="z-10"
      >
        <img
          src="/skull.png"
          alt="Cyberpunk Skull"
          className="w-72 h-72 md:w-96 md:h-96 object-contain"
        />
      </Tilt>
    </div>
  );
};

export default Hero;