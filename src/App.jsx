import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Terminal from './components/Terminal';
import MainSite from './components/MainSite';

function App() {
  const [appState, setAppState] = useState('LOADING');

  const handleLoadingComplete = () => {
    setAppState('TERMINAL');
  };

  const handleStartCommand = () => {
    setAppState('STARTED');
  };
  
  if (appState === 'LOADING') {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }
  
  if (appState === 'TERMINAL') {
    return <Terminal onStart={handleStartCommand} />;
  }
  
  if (appState === 'STARTED') {
    return <MainSite />;
  }

  return null; 
}

export default App;