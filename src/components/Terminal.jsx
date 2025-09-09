import React, { useState, useEffect, useRef } from 'react';

const Terminal = ({ onStart }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (input.trim().toLowerCase() === 'start') {
      onStart();
    } else {
      setInput(''); 
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-background font-mono text-primary">
      <div className="w-full max-w-2xl p-4">
        <p className="text-cyan">// BOOT SEQUENCE COMPLETE. AWAITING INPUT.</p>
        <p className="mt-2 text-primary/80">Instruction: Type 'start' to initialize portfolio interface.</p>
        <form onSubmit={handleFormSubmit} className="mt-4 flex items-center">
          <label htmlFor="command" className="text-cyan">web/portfolio: $</label>
          <input
            ref={inputRef}
            id="command"
            type="text"
            value={input}
            onChange={handleInputChange}
            className="flex-1 bg-transparent border-none text-primary focus:outline-none ml-2"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;