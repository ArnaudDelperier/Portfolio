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
            <div className="scrollbar-effect"></div>
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
        </div>
        </>
    )
}

export default Projects