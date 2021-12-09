import { useEffect } from "react";

function Projects({setParallax}) {

    useEffect(() => {
        setParallax(false)
      }, [setParallax])
    

    return(
        <div className="projects">
        </div>
    )
}

export default Projects