import React from 'react';
import s from './header.module.css'
import Navigation from "../navigation/Navigation";


const Header = (props) => {
    const {lang, setState, theme, setTheme} = props;

    window.onscroll = function () {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("header").style.height = "50px";
            document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0.7)";


        } else {
            document.getElementById("header").style.height = "70px";
            document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, 0.0)";
        }
    }

    return (
        <div className={s.header} id='header'>
            <Navigation lang={lang} setState={setState} theme={theme} setTheme={setTheme}/>
        </div>
    );
};

export default Header;