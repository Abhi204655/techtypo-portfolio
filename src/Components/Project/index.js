import React from 'react'
import ProjectCard from '../ProjectCard';
import './project.scss';
import Projects from '../../projects.json';

function Project() {
    return (
        <div className="project">
            <div className="project-head">
                <h2>Projects</h2>
            </div>
            <div className="project-list">
                {
                    Projects.map((project, index) => {
                        if (index % 2 === 0) {
                            return <ProjectCard key={index} project={project} />
                        } else {
                            return <ProjectCard key={index} project={project} order="right" />
                        }
                    })
                }
            </div>
        </div >
    )
}

export default Project
