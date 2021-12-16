import { useEffect } from "react";

import './Projects.css'

import projects from "./data";


function Projects({setParallax}) {

    useEffect(() => {
        setParallax(false)
      }, [setParallax])   

    return(
        <>
        <h1 className="projects-title">Projets</h1>
        <div className="projects">
            <button
            onClick={() => {
                document.getElementById("projects-scrollbar").scrollLeft -= 496;
            }} 
            className="scroll-button">
                <span className="arrow-left"></span>
                <span className="arrow-left"></span>
                <span className="arrow-left"></span>
            </button>
            <div className="projects-container" id="projects-scrollbar">
            {projects.map((p) => (
                <a href={p.link} target="_blank" rel="noreferrer">
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
            <button 
            onClick={() => {document.getElementById("projects-scrollbar").scrollLeft += 496;}} 
            className="scroll-button">
                <span className="arrow-right"></span>
                <span className="arrow-right"></span>
                <span className="arrow-right"></span> 
            </button>
        </div>
        </>
    )
}

export default Projects