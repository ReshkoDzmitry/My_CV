import React from 'react';

const Contact = (props) => {
    const {id, image, title} = props
    return (
        <div id='contacts'>
            <a href="#">
                <img src={image} alt={title}/>
                <h4>{title}</h4>
            </a>

        </div>
    );
};

export default Contact;