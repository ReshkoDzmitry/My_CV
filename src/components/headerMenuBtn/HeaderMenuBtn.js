import React, {useState} from 'react';
import menuBtn from './headerMenuBtn.module.css';
import Navigation from "../navigation/Navigation";
import HeaderMenuBtnBlock from "../headerMenuBtnBlock/HeaderMenuBtnBlock";

const HeaderMenuBtn = (props) => {
    const [menuActive, setMenuActive] = useState(false)

    const menu = () => {
        setMenuActive(true)
    }


    return (
        <div>
            <button onClick={menu}>MENU</button>
            <div>
                <HeaderMenuBtnBlock active={menuActive} setActive={setMenuActive}/>
            </div>

        </div>
    );
};

export default HeaderMenuBtn;
