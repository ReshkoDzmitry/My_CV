import React, {useState} from 'react';
import menuBtn from './headerMenuBtn.module.css';
import Navigation from "../navigation/Navigation";
import HeaderMenuBtnBlock from "../headerMenuBtnBlock/HeaderMenuBtnBlock";
import NavigationAdaptive from "../navigationAdaptive/NavigationAdaptive";

const HeaderMenuBtn = (props) => {
    // const [menuActive, setMenuActive] = useState(false)
    //
    // return (
    //     <div>
    //         {/*<Navigation active={menuActive} setActive={setMenuActive}/>*/}
    //         <div className={menuBtn.btnWrapper}>
    //             <button onClick={() => setMenuActive(!menuActive)}>Menu</button>
    //         </div>
    //
    //         <div className={`${menuActive ? menuBtn.active : menuBtn.col}`}>
    //             <NavigationAdaptive />
    //         </div>
    //
    //     </div>
    // );
};

export default HeaderMenuBtn;
