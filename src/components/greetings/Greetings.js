import React from 'react';
import greetingsStyle from './greetings.module.css'
import s from '../../common/styles.module.css'
import photo from '../../images/greeting/photo.jpg'
import photoNight from '../../images/greeting/photoNight.jpg'


const Greetings = (props) => {

    const {lang, theme} = props;

    return (

        <div className={`${s.openSansFont} ${theme ? "" : greetingsStyle.nightBg}`}
             id='aboutMe'>

            <div className={`${greetingsStyle.greeting} ${s.container}`}>

                <div className={`${s.flex} ${greetingsStyle.mediaFlex}`}>
                    <div className={greetingsStyle.photoBlockWrapper}>
                        {/*<img className={theme ? greetingsStyle.photo : greetingsStyle.photoNight} src={theme ? photo : photoNight} alt="photo"/>*/}
                        <img className={theme ? greetingsStyle.photo : greetingsStyle.photoNight} src={photo}
                             alt="photo"/>
                        <div className={greetingsStyle.downloadCVWrapper}>
                            <a href="https://rabota.by/resume_converter/%D0%A0%D0%B5%D1%88%D0%BA%D0%BE%20%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9%20%D0%93%D0%B5%D0%BD%D0%BD%D0%B0%D0%B4%D1%8C%D0%B5%D0%B2%D0%B8%D1%87.pdf?hash=e990ef5aff0190b08c0039ed1f4c6a58584d7a&type=pdf&hhtmSource=resume&hhtmFrom=&force-roles=true"
                               target="_blank">
                                {lang ?
                                    <div
                                        className={theme ? greetingsStyle.downloadCV : greetingsStyle.downloadCVNight}>Download
                                        CV
                                    </div> :
                                    <div
                                        className={theme ? greetingsStyle.downloadCV : greetingsStyle.downloadCVNight}>Скачать
                                        резюме
                                    </div>
                                }
                            </a>
                        </div>
                    </div>

                    <div>
                        {lang ?
                            <h2 className={`${greetingsStyle.titleName} ${s.bellotaFont}`}>Dzmitry Reshko</h2> :
                            <h2 className={`${greetingsStyle.titleName} ${s.bellotaFont}`}>Дмитрий Решко</h2>
                        }

                        {lang ?
                            <div className={greetingsStyle.descriptionWrapper}>
                                <p className={theme ? greetingsStyle.descriptionItem : `${greetingsStyle.descriptionItem} ${greetingsStyle.descriptionItemNight}`}>
                                    Hello. My name is Dmitry. I am 32 years old. I am a Junior Front-end Developer (React). I have over 11 years of experience in various fields.
                                    Perfectionist for life. Therefore, I approach each task as responsibly as possible and try to complete it as best as possible.
                                    Leadership qualities are well developed. I love when everything and everyone works productively and harmoniously.
                                    Optimist. I approach everything with humor and full responsibility.
                                    At each place of work he has established himself as a responsible employee.
                                    I am currently working as a software engineer. Completed courses at IT-Academia and IT-Incubator.
                                    I love spending time with family and friends. In my free time, I make wood jewelry.
                                </p>
                            </div> :
                            <div className={greetingsStyle.descriptionWrapper}>
                                <p className={theme ? greetingsStyle.descriptionItem : `${greetingsStyle.descriptionItem} ${greetingsStyle.descriptionItemNight}`}>
                                    Привет. Меня зовут Дмитрий. Мне 32 года. Я Junior Front-end Developer (React). Опыт моей работы в различных сферах более 11 лет.
                                    Перфекционист по-жизни. Поэтому к каждому заданию подхожу максимально ответственно и стараюсь выполнить его как можно лучше.
                                    Хорошо развиты лидерские качества. Люблю когда всё и все работают продуктивно и слаженно.
                                    Оптимист. Ко всему подхожу с юмором и полной ответственностью.
                                    На каждом месте работы зарекомендовал себя как ответственный работник.
                                    В данный момент работаю инженером-программистом. Прошел курсы в IT-Academia и IT-Incubator.
                                    Мои навыки, усидчивость и настойчивость помогут вам решать необходимые для компании задачи.
                                    Люблю проводить время в компании семьи и друзей. В свободное время занимаюсь изготовлением украшений из дерева.
                                </p>
                            </div>
                        }


                        {lang ?
                            <div className={`${s.flex} ${greetingsStyle.descriptionBlock}`}>

                                <div className={greetingsStyle.listDescriptionWrapper}>
                                    <div className={s.flex}>
                                        <div className={greetingsStyle.titleListInfo}>Age:</div>
                                        <div
                                            className={theme ? greetingsStyle.textListInfo : `${greetingsStyle.textListInfo} ${greetingsStyle.textListInfoNight}`}>32
                                        </div>
                                    </div>

                                    <div className={s.flex}>
                                        <div className={greetingsStyle.titleListInfo}>Address:</div>
                                        <div
                                            className={theme ? greetingsStyle.textListInfo : `${greetingsStyle.textListInfo} ${greetingsStyle.textListInfoNight}`}>Minsk
                                            city, Belarus
                                        </div>
                                    </div>

                                    <div className={s.flex}>
                                        <div className={greetingsStyle.titleListInfo}>Experience:</div>
                                        <div
                                            className={theme ? greetingsStyle.textListInfo : `${greetingsStyle.textListInfo} ${greetingsStyle.textListInfoNight}`}>over
                                            11 years
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <div className={s.flex}>
                                            <div className={greetingsStyle.titleListInfo}>English:</div>
                                            <div
                                                className={theme ? greetingsStyle.textListInfo : `${greetingsStyle.textListInfo} ${greetingsStyle.textListInfoNight}`}>A2
                                            </div>
                                        </div>

                                        <div className={s.flex}>
                                            <div className={greetingsStyle.titleListInfo}>E-mail:</div>
                                            <div className={greetingsStyle.textListInfo}>
                                                <a className={theme ? '' : greetingsStyle.textListInfoNight}
                                                   href="mailto:dzmitryreshko@gmail.com">dzmitryreshko@gmail.com</a>
                                            </div>
                                        </div>

                                        <div className={s.flex}>
                                            <div className={greetingsStyle.titleListInfo}>Phone:</div>
                                            <div className={greetingsStyle.textListInfo}>
                                                <a className={theme ? '' : greetingsStyle.textListInfoNight}
                                                   href="tel:+375333228375">+375 (33) 322-83-75</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> :

                            <div className={`${s.flex} ${greetingsStyle.descriptionBlock}`}>

                                <div className={greetingsStyle.listDescriptionWrapper}>
                                    <div className={s.flex}>
                                        <div className={greetingsStyle.titleListInfo}>Возраст:</div>
                                        <div
                                            className={theme ? greetingsStyle.textListInfo : `${greetingsStyle.textListInfo} ${greetingsStyle.textListInfoNight}`}>32
                                        </div>
                                    </div>

                                    <div className={s.flex}>
                                        <div className={greetingsStyle.titleListInfo}>Адрес:</div>
                                        <div
                                            className={theme ? greetingsStyle.textListInfo : `${greetingsStyle.textListInfo} ${greetingsStyle.textListInfoNight}`}>
                                            г.Минск, Беларусь
                                        </div>
                                    </div>

                                    <div className={s.flex}>
                                        <div className={greetingsStyle.titleListInfo}>Опыт работы:</div>
                                        <div
                                            className={theme ? greetingsStyle.textListInfo : `${greetingsStyle.textListInfo} ${greetingsStyle.textListInfoNight}`}>
                                            больше 11 лет
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <div className={s.flex}>
                                            <div className={greetingsStyle.titleListInfo}>Английский:</div>
                                            <div
                                                className={theme ? greetingsStyle.textListInfo : `${greetingsStyle.textListInfo} ${greetingsStyle.textListInfoNight}`}>A2
                                            </div>
                                        </div>

                                        <div className={s.flex}>
                                            <div className={greetingsStyle.titleListInfo}>E-mail:</div>
                                            <div className={greetingsStyle.textListInfo}>
                                                <a className={theme ? '' : greetingsStyle.textListInfoNight}
                                                   href="mailto:dzmitryreshko@gmail.com">dzmitryreshko@gmail.com</a>
                                            </div>
                                        </div>

                                        <div className={s.flex}>
                                            <div className={greetingsStyle.titleListInfo}>Phone:</div>
                                            <div className={greetingsStyle.textListInfo}>
                                                <a className={theme ? '' : greetingsStyle.textListInfoNight}
                                                   href="tel:+375333228375">+375 (33) 322-83-75</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }


                        {lang ?
                            <h3 className={greetingsStyle.placesOfWorkTitle}>Places of work</h3> :
                            <h3 className={greetingsStyle.placesOfWorkTitle}>Опыт работы</h3>
                        }

                        {lang ?
                            <div className={`${s.flex} ${greetingsStyle.placesOfWorkBox}`}>

                                <div className={greetingsStyle.placesOfWorkWrapper}>
                                    <div className={`${greetingsStyle.personalData} ${greetingsStyle.textListWorks}`}>
                                        <p className={greetingsStyle.workPosition}>Technician programmer</p>
                                        <div className={s.flex}>
                                            <div
                                                className={theme ? greetingsStyle.placesOfWork : greetingsStyle.placesOfWorkNight}>"БКНТ"
                                                2010-2013
                                            </div>
                                        </div>
                                    </div>


                                    <div className={`${greetingsStyle.personalData} ${greetingsStyle.textListWorks}`}>
                                        <p className={greetingsStyle.workPosition}>Repairman</p>
                                        <div className={s.flex}>
                                            <div
                                                className={theme ? greetingsStyle.placesOfWork : greetingsStyle.placesOfWorkNight}>
                                                "Nordlys" 2013-2014
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <div className={`${greetingsStyle.personalData} ${greetingsStyle.textListWorks}`}>
                                        <p className={greetingsStyle.workPosition}>Technician</p>
                                        <div className={s.flex}>
                                            <div
                                                className={theme ? greetingsStyle.placesOfWork : greetingsStyle.placesOfWorkNight}>
                                                "ByTech" 2014-2021
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${greetingsStyle.personalData} ${greetingsStyle.textListWorks}`}>
                                        <p className={greetingsStyle.workPosition}>System programmer</p>
                                        <div className={s.flex}>
                                            <div
                                                className={theme ? greetingsStyle.placesOfWork : greetingsStyle.placesOfWorkNight}>
                                                "ByTech" 2021-2022
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> :


                            <div className={`${s.flex} ${greetingsStyle.placesOfWorkBox}`}>

                                <div className={greetingsStyle.placesOfWorkWrapper}>
                                    <div className={`${greetingsStyle.personalData} ${greetingsStyle.textListWorks}`}>
                                        <p className={greetingsStyle.workPosition}>Техник-программист</p>
                                        <div className={s.flex}>
                                            <div
                                                className={theme ? greetingsStyle.placesOfWork : greetingsStyle.placesOfWorkNight}>"БКНТ"
                                                2010-2013г.
                                            </div>
                                        </div>
                                    </div>


                                    <div className={`${greetingsStyle.personalData} ${greetingsStyle.textListWorks}`}>
                                        <p className={greetingsStyle.workPosition}>Ремонтировщик</p>
                                        <div className={s.flex}>
                                            <div
                                                className={theme ? greetingsStyle.placesOfWork : greetingsStyle.placesOfWorkNight}>ЗАО
                                                "Нордлис" 2013-2014г.
                                            </div>
                                        </div>
                                    </div>


                                    <div className={`${greetingsStyle.personalData} ${greetingsStyle.textListWorks}`}>
                                        <p className={greetingsStyle.workPosition}>Техник</p>
                                        <div className={s.flex}>
                                            <div
                                                className={theme ? greetingsStyle.placesOfWork : greetingsStyle.placesOfWorkNight}>ООО
                                                "БайТехСервис" 2014-2021г.
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <div className={`${greetingsStyle.personalData} ${greetingsStyle.textListWorks}`}>
                                        <p className={greetingsStyle.workPosition}>Системный программист</p>
                                        <div className={s.flex}>
                                            <div
                                                className={theme ? greetingsStyle.placesOfWork : greetingsStyle.placesOfWorkNight}>ООО
                                                "БайТехСервис" 2021-2022г.
                                            </div>
                                        </div>
                                    </div>


                                    <div className={`${greetingsStyle.personalData} ${greetingsStyle.textListWorks}`}>
                                        <p className={greetingsStyle.workPosition}>Инженер-программист</p>
                                        <div className={s.flex}>
                                            <div
                                                className={theme ? greetingsStyle.placesOfWork : greetingsStyle.placesOfWorkNight}>КУП
                                                "УКС Миноблисполкома" 2021-2022г.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Greetings;


// <div
//     className={`${greetingsStyle.greetingBg} ${theme ? greetingsStyle.greetingBgDay : greetingsStyle.greetingBgNight}`}
//     id='aboutMe' >
//     <div className={s.container}>
//         <div className={greetingsStyle.greetingMt}>
//
//             <div className={`${s.flex} ${greetingsStyle.greetingSectionDescription}`}>
//                 <div className={greetingsStyle.greetingPhotoBox}>
//                         <img className={greetingsStyle.greetingImgPhoto} src={photo} alt="photo"/>
//                         <a target="_blank"
//                            href="https://rabota.by/resume_converter/%D0%A0%D0%B5%D1%88%D0%BA%D0%BE%20%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9%20%D0%93%D0%B5%D0%BD%D0%BD%D0%B0%D0%B4%D1%8C%D0%B5%D0%B2%D0%B8%D1%87.pdf?hash=e990ef5aff0190b08c0039ed1f4c6a58584d7a&type=pdf&hhtmSource=resume&hhtmFrom=&force-roles=true">
//                             <div className={greetingsStyle.downloadCV}>
//                                 Download CV
//                             </div>
//                         </a>
//                 </div>
//
//                 <div className={greetingsStyle.greetingContent}>
//                     <div>
//                         <h2>Dzmitry Reshko</h2>
//                         <p>
//                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur, at
//                             consequuntur
//                             distinctio eius excepturi fugiat hic in ipsam iste libero molestias nesciunt omnis
//                             quasi quia
//                             quibusdam, quidem, suscipit temporibus.
//                             <br/>
//                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur, at
//                             consequuntur
//                             distinctio eius excepturi fugiat hic in ipsam iste libero molestias nesciunt omnis
//                             quasi quia
//                             quibusdam, quidem, suscipit temporibus.
//                             <br/>
//                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur, at
//                             consequuntur
//                             distinctio eius excepturi fugiat hic in ipsam iste libero molestias nesciunt omnis
//                             quasi quia
//                             quibusdam, quidem, suscipit temporibus.
//                         </p>
//                     </div>
//
//                     <div className={s.flex} style={{border:"1px solid red", justifyContent:"space-around", marginTop:"30px"}}>
//                         <div>
//                             <div className={`${s.flex} ${greetingsStyle.personalData}`}>
//                                 <div>Age:</div>
//                                 <div>31</div>
//                             </div>
//                             <div className={`${s.flex} ${greetingsStyle.personalData}`}>
//                                 <div>Address:</div>
//                                 <div>Minsk city, Belarus</div>
//                             </div>
//                             <div className={`${s.flex} ${greetingsStyle.personalData}`}>
//                                 <div>Experience:</div>
//                                 <div>over 11 years</div>
//                             </div>
//                             <div className={`${s.flex} ${greetingsStyle.personalData}`}>
//                                 <div>English language:</div>
//                                 <div>A2</div>
//                             </div>
//                             <div className={`${s.flex} ${greetingsStyle.personalData}`}>
//                                 <div>E-mail:</div>
//                                 <div>
//                                     <a href="mailto:dzmitryreshko@gmail.com">dzmitryreshko@gmail.com</a>
//                                 </div>
//                             </div>
//                             <div className={`${s.flex} ${greetingsStyle.personalData}`}>
//                                 <div>Phone:</div>
//                                 <div>
//                                     <div>
//                                         <a href="tel:+375333228375">+375 (33) 322-83-75</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div>
//                             <div className={greetingsStyle.personalData}>
//                                 <h3>Техник-программист</h3>
//                                 <div className={s.flex}>
//                                     <div>"Барановичский комбинат надомного труда"</div>
//                                     <div>2010-2013г.</div>
//                                 </div>
//                             </div>
//
// <div className={greetingsStyle.personalData}>
//     <h3>Ремонтировщик</h3>
//     <div className={s.flex}>
//         <div>ЗАО "Нордлис"</div>
//         <div>2013-2014г.</div>
//     </div>
// </div>
//
// <div className={greetingsStyle.personalData}>
//     <h3>Техник</h3>
//     <div className={s.flex}>
//         <div>ООО "БайТехСервис"</div>
//         <div>2014-2021г.</div>
//     </div>
// </div>
//
// <div className={greetingsStyle.personalData}>
//     <h3>Системный программист</h3>
//     <div className={s.flex}>
//         <div>ООО "БайТехСервис"</div>
//         <div>2021-now</div>
//     </div>
// </div>
//
//
//                         </div>
//
//                     </div>
//                 </div>
//             </div>


{/*<div className={`${s.flex} ${greetingsStyle.greetingSectionDescription}`}*/
}
{/*     style={{marginTop: '50px'}}>*/
}

{/*<div className={greetingsStyle.greetingContent}>*/
}
{/*    <div>*/
}

{/*        <div className={`${s.flex} ${greetingsStyle.greetingDescription}`}>*/
}
{/*            <div>*/
}
{/*                <div className={`${s.flex} ${greetingsStyle.personalData}`}>*/
}
{/*                    <div>Age:</div>*/
}
{/*                    <div>31</div>*/
}
{/*                </div>*/
}
{/*                <div className={`${s.flex} ${greetingsStyle.personalData}`}>*/
}
{/*                    <div>Address:</div>*/
}
{/*                    <div>Minsk city, Belarus</div>*/
}
{/*                </div>*/
}
{/*                <div className={`${s.flex} ${greetingsStyle.personalData}`}>*/
}
{/*                    <div>Experience:</div>*/
}
{/*                    <div>over 11 years</div>*/
}
{/*                </div>*/
}
{/*                <div className={`${s.flex} ${greetingsStyle.personalData}`}>*/
}
{/*                    <div>English language:</div>*/
}
{/*                    <div>A2</div>*/
}
{/*                </div>*/
}
{/*                <div className={`${s.flex} ${greetingsStyle.personalData}`}>*/
}
{/*                    <div>E-mail:</div>*/
}
{/*                    <div>*/
}
{/*                        <a href="mailto:dzmitryreshko@gmail.com">dzmitryreshko@gmail.com</a>*/
}
{/*                    </div>*/
}
{/*                </div>*/
}
{/*                <div className={`${s.flex} ${greetingsStyle.personalData}`}>*/
}
{/*                    <div>Phone:</div>*/
}
{/*                    <div>*/
}
{/*                        <div>*/
}
{/*                            <a href="tel:+375333228375">+375 (33) 322-83-75</a>*/
}
{/*                        </div>*/
}
{/*                    </div>*/
}
{/*                </div>*/
}

{/*            </div>*/
}


{/*            <div className={greetingsStyle.placesOfWork}>*/
}
{/*                <ul>*/
}
{/*                    <li>*/
}
{/*                        <div>*/
}
{/*                            Техник-программист. "Барановичский комбинат надомного труда".*/
}
{/*                            2010-2013г.*/
}
{/*                        </div>*/
}
{/*                    </li>*/
}

{/*                    <li>*/
}
{/*                        <div>*/
}
{/*                            Ремонтировщик. ЗАО "Нордлис". 2013-2014г.*/
}
{/*                        </div>*/
}
{/*                    </li>*/
}

{/*                    <li>*/
}
{/*                        <div>*/
}
{/*                            Техник. ООО "БайТехСервис". 2014-2021г.*/
}
{/*                        </div>*/
}
{/*                    </li>*/
}

{/*                    <li>*/
}
{/*                        <div>*/
}
{/*                            Системный программист. ООО "БайТехСервис". 2021-now*/
}
{/*                        </div>*/
}
{/*                    </li>*/
}
{/*                </ul>*/
}
{/*            </div>*/
}


{/*        </div>*/
}
{/*    </div>*/
}
{/*</div>*/
}
{/*<div className={greetingsStyle.greetingPhotoBox}>*/
}
{/*    <div>*/
}
{/*        <img className={greetingsStyle.greetingImgLaptop} src={laptop} alt="laptop"/>*/
}
{/*    </div>*/
}

{/*</div>*/
}

//
//         </div>
//     </div>
// </div>


{/*            // <div className={greetingsStyle.bgColor} id='aboutMe'*/
}
{/*        */
}
{/*//      style={{backgroundImage: 'url(' + backgroundImg + ')', backgroundRepeat: 'no-repeat'}}>*/
}

{/*// <div className={`${theme ? greetingsStyle.bgColorDay : greetingsStyle.bgColorNight}`} id='aboutMe'>*/
}
{/*//*/
}
{/*//*/
}
{/*//     <div className={`${s.container} ${greetingsStyle.greetings}`}>*/
}
{/*//*/
}
{/*//         <div  className={`${s.container} ${greetingsStyle.resumeCard} ${theme ? s.day : s.night} `}>*/
}
{/*//*/
}
{/*//             <div className={greetingsStyle.photoResumeCard}>*/
}
{/*//*/
}
{/*//                 <img className={greetingsStyle.photo}*/
}
{/*//                      src={photo}*/
}
{/*//                      alt="photo"/>*/
}
{/*//                 <a target="_blank" href="https://rabota.by/resume_converter/%D0%A0%D0%B5%D1%88%D0%BA%D0%BE%20%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9%20%D0%93%D0%B5%D0%BD%D0%BD%D0%B0%D0%B4%D1%8C%D0%B5%D0%B2%D0%B8%D1%87.pdf?hash=e990ef5aff0190b08c0039ed1f4c6a58584d7a&type=pdf&hhtmSource=resume&hhtmFrom=&force-roles=true">{lang ? 'Download CV' : 'Скачать резюме'}</a>*/
}
{/*//*/
}
{/*//             </div>*/
}
{/*//             <div className={greetingsStyle.contentResumeCard}>*/
}
{/*//                 {lang ?*/
}
{/*//                     <>*/
}
{/*//                         <div className={greetingsStyle.contentResumeCardCenter}>*/
}
{/*//                             <h1>My name is Dzmitry<br/></h1>*/
}
{/*//                             <p>I am a front-end developer.</p>*/
}
{/*//                         </div>*/
}
{/*//*/
}
{/*//                         <hr/>*/
}
{/*//                         <div className={s.flex}>*/
}
{/*//                             <h5 className={s.title}>AGE:</h5>*/
}
{/*//                             <p>31</p>*/
}
{/*//                         </div>*/
}
{/*//                         <div className={s.flex}>*/
}
{/*//                             <h5 className={s.title}>ADDRESS:</h5>*/
}
{/*//                             <p>19 Lozhinskaya Str. Minsk. Belarus</p>*/
}
{/*//                         </div>*/
}
{/*//                         <div className={s.flex}>*/
}
{/*//                             <h5 className={s.title}>PHONE:</h5>*/
}
{/*//                             <a href="tel:+375333228375">+375 33 322-83-75</a>*/
}
{/*//                         </div>*/
}
{/*//                         <div className={s.flex}>*/
}
{/*//                             <h5 className={s.title}>E-MAIL:</h5>*/
}
{/*//                             <a href="mailto:dzmitryreshko@gmail.com">dzmitryreshko@gmail.com</a>*/
}
{/*//                         </div>*/
}
{/*//                         <div className={s.flex}>*/
}
{/*//                             <h5 className={s.title}>EXPERIENCE:</h5>*/
}
{/*//                             <p>over 11 years</p>*/
}
{/*//                         </div>*/
}
{/*//                         <div className={s.flex}>*/
}
{/*//                             <h5 className={s.title}>ENGLISH LANGUAGE:</h5>*/
}
{/*//                             <p>A2</p>*/
}
{/*//                         </div>*/
}
{/*//                     </>*/
}
{/*//                     :*/
}
{/*//                     <>*/
}
{/*//                         <div className={greetingsStyle.contentResumeCardCenter}>*/
}
{/*//                             <div className={greetingsStyle.bubble}>Привет!</div>*/
}
{/*//                             <h1>Меня зовут Дмитрий<br/></h1>*/
}
{/*//                             <p>Я front-end разработчик.</p>*/
}
{/*//                         </div>*/
}
{/*//*/
}
{/*//                         <hr/>*/
}
{/*//                         <div className={s.flex}>*/
}
{/*//                             <h5 className={s.title}>ВОЗРАСТ:</h5>*/
}
{/*//                             <p>31</p>*/
}
{/*//                         </div>*/
}
{/*//                         <div className={s.flex}>*/
}
{/*//                             <h5 className={s.title}>АДРЕС:</h5>*/
}
{/*//                             <p>Беларусь, г.Минск, ул.Ложинская, д.19</p>*/
}
{/*//                         </div>*/
}
{/*//                         <div className={s.flex}>*/
}
{/*//                             <h5 className={s.title}>ТЕЛЕФОН:</h5>*/
}
{/*//                             <a href="tel:+375333228375">+375 33 322-83-75</a>*/
}
{/*//                         </div>*/
}
{/*//                         <div className={s.flex}>*/
}
{/*//                             <h5 className={s.title}>E-MAIL:</h5>*/
}
{/*//                             <a href="mailto:dzmitryreshko@gmail.com">dzmitryreshko@gmail.com</a>*/
}
{/*//                         </div>*/
}
{/*//                         <div className={s.flex}>*/
}
{/*//                             <h5 className={s.title}>ОПЫТ РАБОТЫ:</h5>*/
}
{/*//                             <p>больше 11 лет</p>*/
}
{/*//                         </div>*/
}
{/*//                         <div className={s.flex}>*/
}
{/*//                             <h5 className={s.title}>АНГЛИЙСКИЙ ЯЗЫК:</h5>*/
}
{/*//                             <p>A2</p>*/
}
{/*//                         </div>*/
}
{/*//                     </>*/
}
{/*//                 }*/
}
{/*//             </div>*/
}
{/*//         </div>*/
}
{/*//     </div>*/
}
{/*// </div>*/
}


















