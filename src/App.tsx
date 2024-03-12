import { Accueil } from './Pages/Accueil';
import { Routes, Route} from 'react-router-dom';




function App() {
  return (
    <div> 
      <header>
      </header>
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </div>
  );
}

export default App;
