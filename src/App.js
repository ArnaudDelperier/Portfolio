import { Routes, Route } from 'react-router-dom';

import Home from'./Home.js'
import Header from './Header.js'

import './App.css';

function App() {
  return (
    <div className="app">

      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route exact path="/projects" element={<div>projets</div>} />

        < Route exact path="/contact" element={<div>contact</div>} />

      </Routes>

    </div>
  );
}

export default App;
