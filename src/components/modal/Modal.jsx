import React from 'react';
import './modal.css';
import s from "../../common/styles.module.css";


const Modal = (props) => {
    const {active, setActive, title, descriptionENG, descriptionRU, descriptionModalENG, descriptionModalRU, url, image, lang, theme} = props;
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)} >
            <div className={`${active ? "modalContent active" : "modalContent"} ${theme ? "modalBg" : "modalBgNight"}`} onClick={e => e.stopPropagation()}>
                <img className={"modalImgProject"} src={image} alt="coffee1" />
                <h5 className={`${s.montserratFont} ${"modalDescriptionTitle"} ${theme ? "description" : "descriptionNight"}`}>{title}</h5>
                <p className={`${s.openSansFont} ${"modalDescription"} ${theme ? "description" : "descriptionNight"}`}>{lang ? descriptionModalENG : descriptionModalRU}</p>

                <div className={"modalBtnInner"}>
                    <div>
                        <a href={url}
                           target="_blank">
                            {lang ?
                                <div className={theme ? "btnOpenProject" : "btnOpenProjectNight"}>Open project
                                </div> :
                                <div className={theme ? "btnOpenProject" : "btnOpenProjectNight"}>Открыть проект
                                </div>
                            }
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Modal;