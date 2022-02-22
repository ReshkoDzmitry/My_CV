import React from 'react';
import s from '../../common/styles.module.css';
import projectsStyle from './projects.module.css'
import ProjectCard from "../projectCard/ProjectCard";


const Projects = () => {

    const projects = [
        {
            id: 1,
            image: 'reactImg',
            title: 'Shoes',
            description: 'web-site',
            descriptionModal: 'web-site Modal Shoes',
            url: 'https://reshkodzmitry.github.io/nineFloors/'
        },
        {
            id: 2,
            image: '',
            title: 'Coffee',
            description: 'web-site',
            descriptionModal: 'web-site Modal Coffee',
            url: 'https://reshkodzmitry.github.io/nineFloors/'
        },
        {
            id: 3,
            image: '',
            title: 'Space Journey',
            description: 'game',
            descriptionModal: 'web-site Modal Space Journey',
            url: 'https://reshkodzmitry.github.io/nineFloors/'
        },
        {
            id: 4,
            image: '',
            title: 'ShoppingList',
            description: 'application',
            descriptionModal: 'web-site Modal ShoppingList',
            url: 'https://reshkodzmitry.github.io/nineFloors/'
        },
    ]

    return (
        <div className={projectsStyle.projectsBG} id='project'>
            <div className={`${projectsStyle.projects} ${s.container}`}>
                {projects.map(m => {
                    return (
                        <ProjectCard
                            key={m.id}
                            image={m.image}
                            title={m.title}
                            description={m.description}
                            descriptionModal={m.descriptionModal}
                            url={m.url}
                            projects={projects}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Projects;