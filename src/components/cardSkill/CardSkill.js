import React from 'react';
import cardStyle from './cardSkill.module.css'


const CardSkill = (props) => {
    let {id, image, title, description} = props
    return (

            // <div style={{width:"130px", height:"130px", border:"solid 1px gray", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", margin:"10px"}}>
            //     <img src={image} alt="title" style={{width:"100px", height:"100px"}}/>
            //     <h5>{title}</h5>
            // </div>

            <div className={`${cardStyle.customBtn} ${cardStyle.btn}`} style={{width:"130px", height:"130px", margin:"10px"}}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", flexDirection:"column"}}>
                    <img src={image} alt="title" style={{width:"100px", height:"100px"}}/>
                    <h5>{title}</h5>
                </div>
            </div>

    );
};

export default CardSkill;