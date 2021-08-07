import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Register.css';

class Register extends React.Component {
    render() {
        return (
            <div id="mc_embed_signup">
            <form action="https://gmail.us6.list-manage.com/subscribe/post?u=1a2ccc7db22d8e1819931040c&amp;id=d6adb2414e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                    <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                    <div className="mc-field-group">
                        <label htmlFor="mce-NAME">Nombre  <span className="asterisk">*</span></label>
                        <input type="text" name="NAME" className="required" id="mce-NAME" />
                    </div>
                    <div className="mc-field-group">
                        <label htmlFor="mce-MMERGE1">Apellido  <span className="asterisk">*</span></label>
                        <input type="text" name="MMERGE1" className="required" id="mce-MMERGE1" />
                    </div>
                    <div className="mc-field-group">
                        <label htmlFor="mce-EMAIL">Mail  <span className="asterisk">*</span></label>
                        <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
                    </div>
                    <div className="mc-field-group">
                        <label htmlFor="mce-MMERGE3">Empresa </label>
                        <input type="text" name="MMERGE3" className="" id="mce-MMERGE3" />
                    </div>
                    <div id="mce-responses" className="clear">
                        <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                        <div className="response" id="mce-success-response" style={{display:"none"}}></div>
                    </div>
                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_1a2ccc7db22d8e1819931040c_d6adb2414e" tabIndex="-1"
                     /></div>
                    <div className="clear">
                        <input type="submit" value="Registrarme" name="subscribe" id="mc-embedded-subscribe" className="button" />
                        <Link to="/">
                            <input type="button" value="Volver" id="mc-embedded-subscribe" className="button" />
                        </Link>
                    </div>
                </div>
            </form>
            </div>
        )
    }
}

export default Register;