import React from 'react';
import './modal.css'


const Modal = ({active, setActive, title, descriptionModal}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
                <h5>{title}</h5>
                <p>{descriptionModal}</p>
            </div>
        </div>
    );
};

export default Modal;