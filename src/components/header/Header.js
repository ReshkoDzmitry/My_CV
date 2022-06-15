import React, {useEffect, useState} from 'react';
import s from './header.module.css'
import Navigation from "../navigation/Navigation";


const Header = (props) => {
    const {lang, setState, theme, setTheme} = props;

    const [active, setActive] = useState(false)

    useEffect( () => {
        window.onscroll = function () {
                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    document.getElementById("header").style.height = "50px";
                    document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0.7)";


                } else {
                    document.getElementById("header").style.height = "70px";
                    document.getElementById("header").style.backgroundColor = "rgba(2,2,2,0)";
                }
            }
    })

        useEffect(() => {
            if (window.matchMedia("(max-width: 700px)").matches) {

                if (active) {
                    document.getElementById("header").style.height = "200px";
                    // document.getElementById("header").style.position = "fixed";
                    document.getElementById("header").style.backgroundColor = 'rgba(0,0,0,0.78)';
                } else {
                    // document.getElementById("header").style.height = "5px";
                    document.getElementById("header").style.backgroundColor = "rgba(28,29,36,0)";
                }
            }
        })


    return (
        <div className={s.header} id='header' style={{zIndex:"9"}}>
            <Navigation lang={lang} setState={setState} theme={theme} setTheme={setTheme} active={active} setActive={setActive}/>
        </div>
    );
};

export default Header;