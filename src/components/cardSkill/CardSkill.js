import React from 'react';
import cardStyle from './cardSkill.module.css'


const CardSkill = (props) => {
    let {id, image, title, description} = props
    return (
        <div>
            <div >
                <img src={image} alt="title" className={cardStyle.img}/>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CardSkill;