import './App.css';
import SearchForm from './components/search_web';
import People from './Search/People';
import Planets from './Search/Planets';
import Star from './Search/Star';
import Error from './Search/Error';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

function App() {
  const [selected, setSelected] = useState({})
  return (
    <div className="App">
      <SearchForm selected={selected} setSelected={setSelected} />
      <Routes>
        <Route path="/" element={<Star />} />
        <Route path="/people" element={<People selected={selected} />} />
        <Route path="/planets" element={<Planets selected={selected} />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;