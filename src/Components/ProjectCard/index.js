import React from 'react'
import './projectcard.scss';

function ProjectCard({ project: { title, desc, tags, image }, order }) {
    return (
        <div className={`project-wrapper ${order ? "order-2" : ""}`}>
            <div className="project-left">
                <img src={image} alt="project thumbnail" />
            </div>
            <div className="project-right">
                <h1>{title}</h1>
                <p>{desc}</p>
                <div className="project-right-tags">
                    {tags.map((tag, id) => <p key={id}>{tag}</p>)}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
