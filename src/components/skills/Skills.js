import React, {useState} from 'react';
import s from '../../common/styles.module.css';
import skillsStyle from './skills.module.css';
import CardSkill from '../cardSkill/CardSkill';
import CardStudies from "../cardStudy/CardStudies";
import bem from '../../images/imagesSkills/bem.svg';
import css from '../../images/imagesSkills/css.png';
import figma from '../../images/imagesSkills/figma.png';
import git from '../../images/imagesSkills/git.png';
import html from '../../images/imagesSkills/html.png';
import js from '../../images/imagesSkills/js.png';
import photoshop from '../../images/imagesSkills/photoshop.png';
import react from '../../images/imagesSkills/react.png';
import sass from '../../images/imagesSkills/sass.png';
import ts from '../../images/imagesSkills/ts.png';
import redux from '../../images/imagesSkills/redux.png';
import mUI from '../../images/imagesSkills/materialUi.png';


const Skills = (props) => {

    const {lang, theme} = props;

    const allSkills = [
        {
            id: 1,
            image: html,
            title: 'HTML',
        },
        {
            id: 2,
            image: css,
            title: 'CSS',
        },
        {
            id: 3,
            image: js,
            title: 'JS',
        },
        {
            id: 4,
            image: react,
            title: 'React',
        },
        {
            id: 5,
            image: ts,
            title: 'TypeScript',
        },
        {
            id: 6,
            image: redux,
            title: 'Redux',
        },
        {
            id: 7,
            image: git,
            title: 'Git',
        },
        {
            id: 8,
            image: sass,
            title: 'Sass',
        },
        {
            id: 9,
            image: bem,
            title: 'BEM',
        },
        {
            id: 10,
            image: photoshop,
            title: 'Photoshop',
        },
        {
            id: 11,
            image: figma,
            title: 'Figma',
        },
        {
            id: 12,
            image: mUI,
            title: 'Material UI',
        },
    ]

    const placesOfStudy = [
        {
            id: 1,
            nameEng: 'Baranovichi College of Light Industry',
            nameRu: 'Барановичский колледж легкой промышленности',
            specialityEng: 'Technician programmer',
            specialityRu: 'Техник-программист',
            yearsOfStudy: '2010-2016',
        },
        {
            id: 2,
            nameEng: 'Baranovichi State University',
            nameRu: 'Барановичский государственный университет',
            specialityEng: 'Engineer programmer',
            specialityRu: 'Инженер-программист',
            yearsOfStudy: '2006-2010',
        },
        {
            id: 3,
            nameEng: 'IT-Academia',
            nameRu: 'Айти Академия',
            specialityEng: 'Courses of study, Website development with HTML, CSS & JavaScript',
            specialityRu: 'Курсы обучения, Разработка веб-сайтов с помощью HTML, CSS и JavaScript',
            yearsOfStudy: '2021-2021',
        },
        {
            id: 4,
            nameEng: 'IT-Academia',
            nameRu: 'Айти Академия',
            specialityEng: 'Courses of study, Web application development with JavaScript',
            specialityRu: 'Курсы обучения, Разработка веб-приложений с помощью JavaScript',
            yearsOfStudy: '2021-2021',
        },
        {
            id: 5,
            nameEng: 'IT-Incubator',
            nameRu: 'Айти Инкубатор',
            specialityEng: 'Courses of study, Front-end Developer (ReactJS)',
            specialityRu: 'Курсы обучения, Front-end разработчик (ReactJS)',
            yearsOfStudy: '2021-2022',
        },
    ]

    return (
        <div className={theme ? skillsStyle.skillsBG : skillsStyle.skillsBGNight} id={'skills'}>
            <div className={`${skillsStyle.skills} ${s.container}`}>

                {/*{lang ?*/}
                {/*    <div style={{display:"flex", justifyContent:"space-between", padding:"0 0 25px 0"}}>*/}
                {/*        <h3 className={`${skillsStyle.skillsStudiesTitle} ${s.montserratFont}`}>Places of study</h3>*/}
                {/*        <h3 className={`${skillsStyle.skillsStudiesTitle} ${s.montserratFont}`} style={{marginRight:"10px"}}>My skills</h3>*/}
                {/*    </div> :*/}
                {/*    <div style={{display:"flex", justifyContent:"space-between", padding:"0 0 25px 0"}}>*/}
                {/*        <h3 className={`${skillsStyle.skillsStudiesTitle} ${s.montserratFont}`}>Места учёбы</h3>*/}
                {/*        <h3 className={`${skillsStyle.skillsStudiesTitle} ${s.montserratFont}`} style={{marginRight:"10px"}}>Мои навыки</h3>*/}
                {/*    </div>*/}
                {/*}*/}

                <div className={skillsStyle.wrapperSkills}>

                    <div className={skillsStyle.studyBlock}>

                        <div className={skillsStyle.studySkillsBlockTitle}>
                            {lang ?
                                <h3 className={`${skillsStyle.skillsStudiesTitle} ${s.montserratFont}`}>Places of study</h3>
                                :
                                <h3 className={`${skillsStyle.skillsStudiesTitle} ${s.montserratFont}`}>Места учёбы</h3>
                            }

                        </div>

                        <div>
                            {
                                placesOfStudy.map(m => {
                                    return (
                                        <CardStudies
                                            key={m.id}
                                            id={m.id}
                                            nameEng={m.nameEng}
                                            nameRu={m.nameRu}
                                            specialityEng={m.specialityEng}
                                            specialityRu={m.specialityRu}
                                            yearsOfStudy={m.yearsOfStudy}
                                            lang={lang}
                                            theme={theme}
                                        />
                                    )
                                })
                            }
                        </div>

                    </div>


                    <div className={skillsStyle.skillsBlock}>

                        <div className={skillsStyle.studySkillsBlockTitle}>
                            {lang ?
                                <h3 className={`${skillsStyle.skillsStudiesTitle} ${s.montserratFont}`}>My skills</h3>
                                :
                                <h3 className={`${skillsStyle.skillsStudiesTitle} ${s.montserratFont}`}>Мои навыки</h3>
                            }
                        </div>

                        <div className={skillsStyle.skillsItems}>
                            {
                                allSkills.map(m => {
                                    return (
                                        <CardSkill
                                            key={m.id}
                                            id={m.id}
                                            image={m.image}
                                            title={m.title}
                                            description={m.description}
                                            lang={lang}
                                            theme={theme}
                                        />
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
                </div>
        </div>

    );
};

export default Skills;