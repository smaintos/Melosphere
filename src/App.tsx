import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Accueil } from './Pages/Accueil';
import { Inscription } from './Pages/Inscription';
import { Routes, Route, NavLink } from 'react-router-dom';



function App() {
  return (
    <div> 
      <header>
      </header>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </div>
  );
}

export default App;
