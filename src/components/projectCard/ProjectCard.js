import React, {useState} from 'react';
import Modal from "../modal/Modal";
import s from "../../common/styles.module.css";
import projectCard from "./projectCard.module.css";


const ProjectCard = (props) => {
    const {image, title, descriptionENG, descriptionRU, url, projects, descriptionModalENG, descriptionModalRU, lang, theme} = props;

    const [modalActive, setModalActive] = useState(false)

    const modalFilter = () => {
        projects.filter(f => f.id === projects.id)
    }

    const allFunctionModal = () => {
        modalFilter()
        setModalActive(true)
    }

    return (
        <div>

            {/*<div onClick={allFunctionModal} className={projectCard.cardWrapper} style={{*/}
            {/*    border: '2px solid gray'*/}
            {/*}}>*/}

            {/*    <img src={image} alt={title} className={projectCard.imgCard}/>*/}
            {/*    <h3>{title}</h3>*/}
            {/*    <p>{description}</p>*/}
            {/*    <a href={url}>Open</a>*/}
            {/*</div>*/}
            {/*<Modal active={modalActive} setActive={setModalActive} title={title}*/}
            {/*       descriptionModal={descriptionModal}/>*/}

            <div onClick={allFunctionModal} className={`${projectCard.customBox} ${projectCard.box}`} style={{cursor: "pointer"}}>
                <div className={projectCard.boxInner}>
                    <img className={projectCard.imgProject} src={image} alt="title" />
                    <h3 className={`${s.montserratFont} ${projectCard.titleProjectCard} ${theme ? projectCard.skillListTitle : projectCard.skillListTitleNight}`}>{title}</h3>
                    <p className={`${s.openSansFont} ${projectCard.descriptionProjectCard} ${theme ? "" : projectCard.descriptionNight}`}>{lang ? descriptionENG : descriptionRU}</p>
                    <p className={`${s.openSansFont} ${projectCard.openModalCard} ${theme ? "" : projectCard.descriptionNight}`}>{lang ? "click to learn more" : "нажми чтобы узнать больше"}</p>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive} title={title} descriptionENG={descriptionENG} descriptionRU={descriptionRU}
                   descriptionModalENG={descriptionModalENG} descriptionModalRU={descriptionModalRU} url={url} image={image} lang={lang} theme={theme}/>
        </div>

    );
};

export default ProjectCard;