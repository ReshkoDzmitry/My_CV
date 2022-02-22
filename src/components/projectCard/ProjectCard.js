import React, {useState} from 'react';
import Modal from "../modal/Modal";


const ProjectCard = (props) => {
    const {image, title, description, url, projects, descriptionModal} = props;

    const [modalActive, setModalActive] = useState(false)

    const modalFilter = () => {
        projects.filter(f => f.id === projects.id)
    }

    const allFunctionModal = () => {
        modalFilter()
        setModalActive(true)
    }

    return (
            <div >
                <div onClick={allFunctionModal} style={{
                    width: '200px',
                    height: '100px',
                    border: '2px solid red'
                }}>
                    <img src={image} alt={title}/>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href={url}>Open</a>
                </div>
                <Modal active={modalActive} setActive={setModalActive} title={title}
                       descriptionModal={descriptionModal}/>
            </div>

    );
};

export default ProjectCard;