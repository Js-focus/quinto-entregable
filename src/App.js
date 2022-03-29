import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LogUser from './components/LogUser';

function App() {
  return (
    <HashRouter>
      <div className='pokebola'></div>
      <Routes>
        <Route path='/' element={<LogUser />} />  

      </Routes>

    </HashRouter>
  );
}

export default App;
