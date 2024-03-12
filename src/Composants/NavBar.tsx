import React from 'react';
import { Link } from 'react-router-dom';


export const NavBar = () => {
  return (
    <nav className='navbar absolute top-0 right-0 p-4'>
            <button className='navbar-style bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-2 rounded mr-4'>
              S'inscrire
            </button>
            <button className='navbar-style bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-2 rounded mr-4'>
              Se connecter
            </button>
            <button className='navbar-style bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded mr-4'>
              Déconnexion
            </button>
    </nav>
  );
}

export default NavBar;
