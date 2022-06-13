import React from 'react';
import btnBlock from './headerMenuBtnBlock.module.css';
import Navigation from "../navigation/Navigation";

const HeaderMenuBtnBlock = (props) => {
    const {lang, setState, theme, setTheme} = props;
    return (
        <div style={{zIndex:"9"}}>
            <Navigation lang={lang} setState={setState} theme={theme} setTheme={setTheme}/>
        </div>
    );
};

export default HeaderMenuBtnBlock;