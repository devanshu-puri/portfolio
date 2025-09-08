// File: src/components/PeepsAnimation.jsx

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const PeepsAnimation = () => {
  // This function is called once to load the animation engine
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // This is the configuration object that defines our animation
  const particlesOptions = {
    background: {
      color: {
        value: "transparent", // The background is transparent
      },
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 15, // How many peeps to show at once
        density: {
          enable: true,
          value_area: 800,
        },
      },
      shape: {
        type: "image",
        image: {
          src: "/peep.png", // The path to our new image in the public folder
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 1,
      },
      size: {
        value: { min: 30, max: 50 }, // Peeps will have random sizes
      },
      move: {
        enable: true,
        speed: 2, // How fast they move
        direction: "left-right", // They will move horizontally
        random: true,
        straight: true,
        out_mode: "out", // They will walk off the screen
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