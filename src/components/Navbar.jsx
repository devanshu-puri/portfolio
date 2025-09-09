import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-4">

        <a href="#home" className="cursor-pointer flex items-center">
          <img
            src="/dev2.png"
            alt="Dev Logo"
            className="h-12 lg:h-14 xl:h-16 w-auto transition-transform duration-300 hover:scale-110"
          />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {["Intro", "Skills", "Projects"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800 font-medium transition-colors duration-300 hover:text-blue-600 
              after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="relative text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800 font-medium transition-colors duration-300 hover:text-blue-600 
            after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg shadow-lg">
          <div className="flex flex-col items-center gap-4 py-6">
            {["Intro", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold transition-colors duration-300 hover:text-blue-600"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
