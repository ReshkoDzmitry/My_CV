import React from 'react';
import s from '../../common/styles.module.css';
import formStyle from './form.module.css'

const Form = () => {
    return (
        <div className={formStyle.formBG}>
            <form className={formStyle.form}>
                <input type="text" placeholder='name'/>
                <input type="text" placeholder='e-mail'/>
                <div>
                    <textarea name="message" id="mes" cols="30" rows="10" placeholder='enter your message'></textarea>
                </div>
                <div>
                    <button>Send message</button>
                </div>
            </form>
        </div>
    );
};

export default Form;