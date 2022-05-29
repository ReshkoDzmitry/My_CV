import React from 'react';
import s from '../../common/styles.module.css';
import styleNavigation from './navigation.module.css';
import {Link} from 'react-scroll';
import langRU from '../../images/imagesLanguage/langRU.png';
import langENG from '../../images/imagesLanguage/langENG.png';
import sunImg from '../../images/imagesTheme/sun.png';
import moonImg from '../../images/imagesTheme/moon.png';


const navItem = [
    { key: 1, id: 'home', title: 'Home', titleRu: 'Главная'},
    { key: 2, id: 'aboutMe', title: 'About Me', titleRu: 'Обо мне'},
    { key: 3 , id: 'skills', title: 'Skills', titleRu: 'Навыки'},
    { key: 4, id: 'project', title: 'Project', titleRu: 'Проекты'},
    // { key: 5, id: 'contacts', title: 'Contacts', titleRu: 'Контакты'},
]

const Navigation = (props) => {
    const {lang, setState, theme, setTheme} = props;

    const changeLangHandler = () => {
      setState(!lang)
    }

    const changeThemesHandler = () => {
      setTheme(!theme)
    }

    return (
        <div className={`${s.container} ${styleNavigation.navigation} ${s.bellotaFont}`} >
            <ul className={styleNavigation.list}>
                {navItem.map(m => {
                    return (
                        <li key={m.id} >
                            <Link activeClass={styleNavigation.active} className={styleNavigation.link} to={m.id} spy={true} smooth={true}>{lang ? m.title : m.titleRu}</Link>
                        </li>
                    )
                })}
            </ul>
            {theme ?
                <button className={styleNavigation.themeBtn} onClick={changeThemesHandler}><img src={sunImg} alt="sun"/></button> :
                <button className={styleNavigation.themeBtn} onClick={changeThemesHandler}><img src={moonImg} alt="moon"/></button>
            }

            {lang ?
                // <button className={styleNavigation.langBtn} onClick={changeLangHandler}><img
                //     src={langENG} alt="ENG"/></button>:
                // <button className={styleNavigation.langBtn} onClick={changeLangHandler}><img
                //     src={langRU} alt="RU"/></button>

                <button className={styleNavigation.langBtn} onClick={changeLangHandler}>ENG</button>:
                <button className={styleNavigation.langBtn} onClick={changeLangHandler}>RU</button>
            }
        </div>
    );
};

export default Navigation;