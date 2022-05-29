import React from 'react';
import './main.css';
import mainStyle from './main.module.css';
import s from '../../common/styles.module.css';
import telegramIco from '../../images/social/telegram.png';
import viberIco from '../../images/social/viber.png';
import linkedinIco from '../../images/social/linkedin.png';
import vkIco from '../../images/social/vk.png';


export const Main = (props) => {
    const {lang, theme} = props;
    return (
        // <div style={{fontSize: '20px', textAlign: 'center', height: '100vh', backgroundColor: 'orange'}}>
        //     Hello!!! I`m Dzmitry.
        // </div>
        // <div className={mainStyle.mainBG}>
        //     <h1>Abcfghijklmnopq</h1>
        // </div>

        // <div className='mainBG'>
        //     <div className="bg"></div>
        //     <div className="bg bg2"></div>
        //     <div className="bg bg3"></div>
        //     <div className="content">
        //         <h1>Sliding Diagonals Background Effect</h1>
        //     </div>
        // </div>

        <div className={`${mainStyle.mainBG} ${s.bellotaFont}`} id='home'>

            <div className={s.containerFluid}>
                <div className={theme ? s.background : s.backgroundNight}>
                    <div className={s.cube}></div>
                    <div className={s.cube}></div>
                    <div className={s.cube}></div>
                    <div className={s.cube}></div>
                    <div className={s.cube}></div>
                </div>
                <header style={{display:"flex", height:"100vh", alignItems:"center", justifyContent:"center"}}>
                    {/*<div className="logo"><span>RD</span></div>*/}
                    <section className={s.headerContent}>
                        {lang ?
                            <div>
                                <h1 className={mainStyle.mainTitle}>Hi! <br/> My name is Reshko Dzmitry</h1>
                                <p className={s.container}>
                                    I am a junior front-end developer. And I am the one who will help you realize all
                                    your
                                    ideas.<br/>
                                    Check out my portfolio.
                                </p>
                            </div> :
                            <div>
                                <h1 className={mainStyle.mainTitle}>Привет!<br/> Меня зовут Дмитрий Решко</h1>
                                <p className={s.container}>
                                    Я junior front-end разработчик. И я тот, кто поможет реализовать все ваши идеи.<br/>
                                    Посмотрите мое портфолио.
                                </p>
                            </div>
                        }
                        <div className={`${s.flex} ${s.container} ${mainStyle.icoBox}`}>
                            <div className={mainStyle.icoItem}>
                                <a target='_blank' href="https://t.me/DzmitryReshko"><img className={mainStyle.ico}
                                                                                          src={telegramIco}
                                                                                          alt="telegram"/></a>
                            </div>
                            <div className={mainStyle.icoItem}>
                                <a target='_blank' href="viber://chat?number=%2B375333228375"><img
                                    className={mainStyle.ico} src={viberIco} alt="viber"/></a>
                            </div>
                            <div className={mainStyle.icoItem}>
                                <a target='_blank'
                                   href="https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D1%80%D0%B5%D1%88%D0%BA%D0%BE-3a0004231/"><img
                                    className={mainStyle.ico} src={linkedinIco} alt="linkedin"/></a>
                            </div>
                            <div className={mainStyle.icoItem}>
                                <a target='_blank' href="https://vk.com/dzmitry_reshko"><img className={mainStyle.ico}
                                                                                             src={vkIco} alt="vk"/></a>
                            </div>
                        </div>
                    </section>
                </header>
            </div>
        </div>
    );
}