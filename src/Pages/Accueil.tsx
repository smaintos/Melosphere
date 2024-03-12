import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';


export const Accueil = () => {
  return (
    <main className='container mx-0'>
    <nav className='melosphere-title'>
            <Link to='/' className='navbar-style text-base'>Melosphere</Link>
    </nav>
    </main>
  );
} 