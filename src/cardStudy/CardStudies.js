import React from 'react';
import cardStudiesStyle from './cardStady.module.css';
import s from '../common/styles.module.css'

const CardStudies = (props) => {
    let {id, nameEng, nameRu, specialityEng, specialityRu, yearsOfStudy, lang, theme} = props
    return (
        <div>
            <ul style={{listStyle:"none"}}>
                {lang ?
                    <li>
                        <div style={{padding:"10px 0"}}>
                            <h3 className={s.montserratFont} style={{color:"#c6a57a", padding:"10px 0"}}>{nameEng} :</h3>
                            <p className={s.openSansFont} style={theme ? {color:"#5e6472"} : {color:"white"}}>{specialityEng} {yearsOfStudy}</p>
                        </div>
                    </li> :
                    <li>
                        <div style={{padding:"10px 0"}}>
                            <h3 className={s.montserratFont} style={{color:"#c6a57a", padding:"10px 0"}}>{nameRu} :</h3>
                            <p className={s.openSansFont} style={theme ? {color:"#5e6472"} : {color:"white"}}>{specialityRu} {yearsOfStudy}</p>
                        </div>
                    </li>
                }
            </ul>
        </div>
    );
};

export default CardStudies;