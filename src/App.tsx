import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Accueil } from './Pages/Accueil';
import { Inscription } from './Pages/Inscription';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/inscription">Inscription</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </div>
  );
}

export default App;
