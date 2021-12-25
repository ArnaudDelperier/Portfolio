import { useEffect } from "react";

import { motion } from 'framer-motion';

import './Projects.scss';

import projects from "./data";

let requestId;
let scrollSpeed = 1;

function scrolling(direction) {
    requestId = requestAnimationFrame(() => scrolling(direction));
    const scrollBar = document.getElementById("projects-scrollbar");
    if (direction === "left") {
        scrollBar.scrollLeft -= scrollSpeed
    } else if (direction === "right") {
        scrollBar.scrollLeft += scrollSpeed
    }
    console.log(scrollSpeed)
    if (scrollSpeed < 50) {
        scrollSpeed++;
    }
}

function stopScroll() {
    cancelAnimationFrame(requestId);
    scrollSpeed = 1;
}

function Projects({setParallax}) {

    useEffect(() => {
        setParallax(false)
      }, [setParallax])   

    return(
        <>
        <h1 className="projects-title">Projets</h1>
        <motion.div className="projects"         
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0 }}>
            <div className="scrollbar-effect"></div>
            <div className="scrollbtn-wrapper">
                <button onMouseDown={() => scrolling("left")} onMouseUp={stopScroll} onMouseLeave={stopScroll} className="arrowbtn arrowbtn-left"></button>
            </div>
            <div className="projects-container" id="projects-scrollbar">
            {projects.map((p) => (
                <a href={p.link !== "none" ? p.link : null} target="_blank" rel="noreferrer">
                <div key={p.name} className="project">
                    <img className="project__img" src={p.image} alt={p.name}/>
                    <div className="project__text">
                        <div className="project__name">{p.name}</div>
                        <div className="project__description">{p.description}</div>
                    </div>
                </div>
                </a>
            ))}
            </div>
            <div className="scrollbtn-wrapper">
                <button onMouseDown={() => scrolling("right")} onMouseUp={stopScroll} onMouseLeave={stopScroll} className="arrowbtn arrowbtn-right"></button>
            </div>
        </motion.div>
        </>
    )
}

export default Projects