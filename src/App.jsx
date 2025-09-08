// File: src/App.jsx

import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Terminal from './components/Terminal';
import MainSite from './components/MainSite'; // This is your old App component

function App() {
  // This state controls which part of the experience is visible
  const [appState, setAppState] = useState('LOADING');

  const handleLoadingComplete = () => {
    setAppState('TERMINAL');
  };

  const handleStartCommand = () => {
    setAppState('STARTED');
  };
  
  // Conditionally render the correct component based on the current state
  if (appState === 'LOADING') {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }
  
  if (appState === 'TERMINAL') {
    // You will also need to create Terminal.jsx with your code
    return <Terminal onStart={handleStartCommand} />;
  }
  
  if (appState === 'STARTED') {
    return <MainSite />;
  }

  return null; 
}

export default App;