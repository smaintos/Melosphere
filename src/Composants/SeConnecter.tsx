import React from 'react';

interface SeConnecterProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeConnecter: React.FC<SeConnecterProps> = ({ isOpen, onClose }) => {
  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-8 rounded-md relative">
            <div className="absolute top-0 right-0 m-2">
              <button onClick={onClose} className="text-sm text-blue-500 hover:text-blue-700 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-bold mb-2">Mot de passe</label>
                <input type="password" id="password" name="password" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Se connecter</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
