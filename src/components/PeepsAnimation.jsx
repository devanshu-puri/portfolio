import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const PeepsAnimation = () => {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 15,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      shape: {
        type: "image",
        image: {
          src: "/peep.png", 
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 1,
      },
      size: {
        value: { min: 30, max: 50 },
      },
      move: {
        enable: true,
        speed: 2, 
        direction: "left-right", 
        random: true,
        straight: true,
        out_mode: "out", 
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      className="h-full w-full"
    />
  );
};

export default PeepsAnimation;