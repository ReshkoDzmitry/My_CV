import React, {useState} from 'react';
import s from '../../common/styles.module.css';
import skillsStyle from './skills.module.css';
import CardSkill from '../cardSkill/CardSkill';
import html from '../../images/imagesSkills/html.png';
import css from '../../images/imagesSkills/css.png';
import js from '../../images/imagesSkills/js.png';
import react from '../../images/imagesSkills/react.png';


const Skills = () => {

    const allSkills = [
        {
            id: 1,
            image: html,
            title: 'HTML',
            description: 'description for HTML',
        },
        {
            id: 2,
            image: css,
            title: 'CSS',
            description: 'description for CSS',
        },
        {
            id: 3,
            image: js,
            title: 'JS',
            description: 'description for JS',
        },
        {
            id: 4,
            image: react,
            title: 'React',
            description: 'description for React',
        },

    ]

    return (
        <div className={skillsStyle.skillsBG} id={'skills'}>
            <div className={`${skillsStyle.skills} ${s.container}`}>

                {
                    allSkills.map(m => {
                        return (
                            <CardSkill
                                key={m.id}
                                id={m.id}
                                image={m.image}
                                title={m.title}
                                description={m.description}
                            />
                        )
                    })
                }
            </div>
        </div>

    );
};

export default Skills;