// File: src/components/Navbar.jsx

import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 md:p-6 flex justify-between items-center z-20">
      
      {/* Logo using your dev.svg file from the public folder */}
      <a href="#home" className="cursor-pointer">
        <img 
          src="/dev.svg" 
          alt="Dev Logo" 
          className="h-10 w-auto transition-transform duration-300 hover:scale-110" 
        />
      </a>
      
      <div className="hidden md:flex items-center gap-4">
        <a href="#skills" className="nav-button">Skills</a>
        <a href="#projects" className="nav-button">Projects</a>
        <a href="#contact" className="nav-button">Contact</a>
      </div>

      {/* A placeholder for the mobile menu button */}
      <div className="nav-button md:hidden">Menu</div>
    </nav>
  );
};

export default Navbar;