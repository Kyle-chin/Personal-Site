import React from 'react'
import ProjectItem from './ProjectItem'
import { projectList } from '../Helpers/ProjectList'
import "./Projects.css"

const Projects = () => {
  return (
    <div className='projects' id='projects'>
        <h1>My Personal Projects</h1>
        <div className='projectList'>
            {projectList.map((project) => {
                return <ProjectItem name={project.name} image={project.image}/>
            })}
            
        </div>
    </div>
  )
}

export default Projects