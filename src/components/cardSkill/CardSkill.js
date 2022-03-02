import React from 'react';
import cardStyle from './cardSkill.module.css'


const CardSkill = (props) => {
    let {id, image, title, description, lang, theme} = props
    return (

            // <div style={{width:"130px", height:"130px", border:"solid 1px gray", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", margin:"10px"}}>
            //     <img src={image} alt="title" style={{width:"100px", height:"100px"}}/>
            //     <h5>{title}</h5>
            // </div>

            <div className={`${cardStyle.customBox} ${cardStyle.box}`}>
                <div className={cardStyle.boxInner}>
                    <img src={image} alt="title" style={{width:"100px", height:"100px"}}/>
                    <h5 className={theme ? cardStyle.skillListTitle : cardStyle.skillListTitleNight}>{title}</h5>
                </div>
            </div>

    );
};

export default CardSkill;