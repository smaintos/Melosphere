// NavBar.tsx

import React from 'react';

interface NavBarProps {
  onSeConnecterClick: () => void;
  onSinscrireClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSeConnecterClick, onSinscrireClick }) => {
  return (
    <nav className='navbar absolute top-0 right-0 p-4'>
      <button className='navbar-style bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-2 rounded mr-4' onClick={onSinscrireClick}>
        S'inscrire
      </button>
      <button
        className='navbar-style bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-2 rounded mr-4'
        onClick={onSeConnecterClick}>
        Se connecter
      </button>
      <button className='navbar-style bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded mr-4'>
        Déconnexion
      </button>
    </nav>
  );
};

export default NavBar;
