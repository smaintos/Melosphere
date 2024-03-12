import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Composants/NavBar';
import { Accueil } from './Pages/Accueil';
import { SeConnecter } from './Composants/SeConnecter';
import { SInscrire } from './Composants/Inscription';

function App() {
  const [isSeConnecterOpen, setIsSeConnecterOpen] = useState(false);
  const [isSinscrireOpen, setIsSinscrireOpen] = useState(false);

  const handleSeConnecterClick = () => {
    setIsSeConnecterOpen(true);
  };

  const handleSeConnecterClose = () => {
    setIsSeConnecterOpen(false);
  };

  const handleSinscrireClick = () => {
    setIsSinscrireOpen(true);
  };

  const handleSinscrireClose = () => {
    setIsSinscrireOpen(false);
  };

  return (
    <div>
      <header>
        
      </header>
      <NavBar onSeConnecterClick={handleSeConnecterClick} onSinscrireClick={handleSinscrireClick} />
      <SeConnecter isOpen={isSeConnecterOpen} onClose={handleSeConnecterClose} />
      <SInscrire isOpen={isSinscrireOpen} onClose={handleSinscrireClose} />
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </div>
  );
}

export default App;
