import React from 'react';
import s from '../../common/styles.module.css';
import socialStyle from './social.module.css'

const Social = (props) => {
    const {id, image, title, description} = props
    return (
        <div>
            <img src={image} alt={title}/>
            <h4>{title}</h4>
            <h4>{description}</h4>
        </div>
    );
};

export default Social;