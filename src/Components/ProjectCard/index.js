import React from 'react'
import { FaFirefoxBrowser } from 'react-icons/fa';

import { GrGithub } from "react-icons/gr";
import './projectcard.scss';

function ProjectCard({ project: { title, desc, tags, image, githubLink, liveLink }, order }) {
    return (
        <div className={`project-wrapper ${order ? "order-2" : ""}`}>
            <div className="project-left">
                <img src={image} alt="project thumbnail" />
            </div>
            <div className="project-right">
                <h1>{title}</h1>
                <p>{desc}</p>
                <div className="project-right-tags">
                    {tags && tags.map((tag, id) => <p key={id}>{tag}</p>)}
                </div>
                <div className="project-right-links">
                    {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer"><FaFirefoxBrowser size={30} /></a>}
                    {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer"><GrGithub size={30} /></a>}

                </div>
            </div>
        </div>
    )
}

export default ProjectCard
