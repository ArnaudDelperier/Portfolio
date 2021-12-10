import { useEffect } from "react";

import './Projects.css'

import projects from "./data";


function Projects({setParallax}) {

    useEffect(() => {
        setParallax(false)
      }, [setParallax])   

    return(
        <div className="projects">
            <div className="projects-container">
            {projects.map((p) => (
                <div key={p.name} className="project">
                    <img className="project__img" src={p.image} alt={p.name}/>
                    <div className="project__text">
                        <div className="project__name">{p.name}</div>
                        <div className="project__description">{p.description}</div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Projects