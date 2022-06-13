import React from 'react';
import sAdapt from './headerAdaptive.module.css'
import Navigation from "../navigation/Navigation";
import HeaderMenuBtn from "../headerMenuBtn/HeaderMenuBtn";


const HeaderAdaptive = (props) => {
    const {lang, setState, theme, setTheme} = props;

    window.onscroll = function () {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("headerAdaptive").style.height = "50px";
            document.getElementById("headerAdaptive").style.backgroundColor = "rgba(255,0,0,0.7)";


        } else {
            document.getElementById("headerAdaptive").style.height = "70px";
            document.getElementById("headerAdaptive").style.backgroundColor = "rgb(55, 0, 145)";
        }
    }

    return (
        <div className={sAdapt.headerAdaptive} id='headerAdaptive' style={{zIndex:"9"}}>
           <HeaderMenuBtn/>
        </div>
    );
};

export default HeaderAdaptive;