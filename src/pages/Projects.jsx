import { ProjectCard } from "../components/ProjectCard"
import { ProjectPresent } from "../components/ProjectPresent";
import { NavLink } from "react-router-dom"

export const Projects = () => {

  return (
    <>
    <div className="section">

        <ProjectPresent/>
          
        <ProjectCard/>

    </div>
</>
  )
}


