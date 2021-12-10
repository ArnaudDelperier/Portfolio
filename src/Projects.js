import { useEffect } from "react";

import './Projects.css'

import projects from "./data";

function Projects({setParallax}) {

    useEffect(() => {
        setParallax(false)
        console.log(projects)
      }, [setParallax])
    

    return(
        <div className="projects">
            {projects.map((p) => (
                <div key={p.name} className="projects-container">
                    <div>{p.name}</div>
                    <div>{p.description}</div>
                </div>
            ))}
        </div>
    )
}

export default Projects