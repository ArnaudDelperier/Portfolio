import { useEffect, useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import { addBackground, addParallax } from './parallax.js';
import Header from './Header.js';
import Home from'./Home.js';
import Projects from './Projects.js';

import './App.css';

function App() {

  const [parallax, setParallax] = useState(false);

  useEffect(() => {
    addBackground();
    addParallax();
  }, [])

  return (
    <div className="app">
      
      <Header />

      <div id="background">
        <div
          id="parallax" 
          className={parallax ? "parallax-on" : "parallax-off"}>

          <Routes>

            <Route exact path="/" element={<Home setParallax={setParallax}/>} />

            <Route exact path="/projects" element={<Projects setParallax={setParallax}/>} />

            <Route exact path="/contact" element={<div>contact</div>} />

          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
