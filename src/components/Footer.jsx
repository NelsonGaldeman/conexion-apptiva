import React from 'react';
import Social from './Social';
import logo from '../assets/images/logos/bottom.png';

import '../assets/css/Colors.css';
import '../assets/css/TopBottom.css';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <figure className="image is-centered is-vcentered">
                    <img src={logo} className="is-hidden-mobile" alt="Conexión Apptivalo Logo"/>
                    <img src={logo} className="is-hidden-tablet mt-2 logo-size-mobile" alt="Conexión Apptivalo Logo"/>
                </figure>
                <div className="mt-2">
                    <div className="is-hidden-mobile">
                        <p className="is-black is-size-4">Primer canal de postventa multimarca que aporta valor a empresas y usuarios</p>
                        <p className="has-text-weight-bold is-size-4 mt-4">Concenos</p>
                        <a href="https://apptivalo.com" target="_blank" rel="noreferrer">
                            <p className="has-text-primary has-text-weight-bold is-size-4">www.apptivalo.com</p>
                        </a>
                        <Social classes="socialNetwork"/>
                    </div>
                    <div className="is-hidden-tablet content-size-mobile">
                        <p className="is-black is-size-7">Primer canal de postventa multimarca que aporta valor a empresas y usuarios</p>
                        <p className="has-text-weight-bold is-size-7 mt-2">Conocenos</p>
                        <a href="https://apptivalo.com" target="_blank" rel="noreferrer">
                            <p className="has-text-primary has-text-weight-bold is-size-7">www.apptivalo.com</p>
                        </a>
                        <Social classes="socialNetworkMobile"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;