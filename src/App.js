import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LogUser from './components/LogUser';
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';


function App() {
  return (
    <HashRouter>
      <div className='pokebola'></div>
      <Routes>
        <Route path="/" element={<LogUser />} />  
        
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<Pokemon />} />
        </Route>
      </Routes>

    </HashRouter>
  );
}

export default App;
