import { useEffect } from 'react';

import { motion } from 'framer-motion';

import './Home.css';


function Home({setParallax}) {

  useEffect(() => {
    setParallax(true)
  }, [setParallax])


  return (
    <div className="home">
          <motion.div 
          initial={{ x: -100 }}
          animate={{ x: 0 }} 
          transition={{ type: "spring", stiffness: 100 }}
          className="home-text-container"
          >
            <div className="title">Arnaud Delperier</div>
            <div className="description">Hello, passioné par l'informatique depuis l'enfance j'ai décidé de faire du développement mon métier. Je suis formé en tant que développeur web fullstack ainsi qu'en game design.</div>
          </motion.div>
    </div>
  );
}

export default Home;