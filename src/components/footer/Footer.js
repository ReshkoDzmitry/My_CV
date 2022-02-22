import React from 'react';
import s from '../../common/styles.module.css';
import footerStyle from './footer.module.css'
import Social from "../social/Social";
import Contact from "../contacts/Contact";

const Footer = () => {

    const contacts = [
        {id: 1, image: '', title: 'phone', description: '+375 (33) 322-83-75'},
        {id: 2, image: '', title: 'e-mail', description: 'DzmitryReshko@gmail.com'},
        {id: 3, image: '', title: 'address', description: 'Minsk'},
    ]

    const social = [
        {id: 1, image: '', title: 'LinkedIn'},
        {id: 2, image: '', title: 'Facebook'},
        {id: 3, image: '', title: 'Instagram'},
        {id: 4, image: '', title: 'Telegram'},
    ]

    return (
        <div className={footerStyle.footerBG}>
            <div className={`${footerStyle.footer} ${s.container}`}>
                <div>
                    {contacts.map(m => {
                        return(
                            <Contact
                                key={m.id}
                                image={m.image}
                                title={m.title}
                                description={m.description}
                            />
                        )
                    })}
                </div>

                <div>
                    {social.map(m => {
                        return(
                            <Social
                                key={m.id}
                                image={m.image}
                                title={m.title}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Footer;