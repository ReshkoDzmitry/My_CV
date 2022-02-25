import React from 'react';
import cardStudiesStyle from './cardStady.module.css';
import s from '../common/styles.module.css'

const CardStudies = (props) => {
    let {id, nameEng, nameRu, specialityEng, specialityRu, yearsOfStudy} = props
    return (
        <div>
            <ul style={{listStyle:"none"}}>
                <li>
                    <div style={{padding:"15px 0"}}>
                        <h3 className={s.montserratFont} style={{color:"#c6a57a"}}>{nameEng} :</h3>
                        <p className={s.openSansFont}>{specialityEng} {yearsOfStudy}</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default CardStudies;