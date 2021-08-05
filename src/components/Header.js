import React from 'react';
import logo from '../images/logos/main.png';
import './Colors.css';

class Header extends React.Component {
    render() {
        return (
            <div>
                <figure className="image is-fullwidth is-centered is-vcentered">
                <img src={logo} className="is-hidden-mobile" alt="Conexión Apptivalo Logo"/>
                    <img src={logo} className="is-hidden-tablet mt-2" style={{width:"60%"}} alt="Conexión Apptivalo Logo"/>
                </figure>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                    <div className="is-hidden-mobile">
                        <p className="is-black is-size-4">26 de Agosto <p className="has-text-primary is-inline">~</p> 9:30 a 12:30</p>
                        <button className="button is-primary has-text-weight-bold is-large mt-4">¡ REGISTRATE YA !</button>
                    </div>
                    <div className="is-hidden-tablet" style={{width:"60%"}}>
                        <p className="is-black is-size-7">26 de Agosto <p className="is-primary is-inline">~</p> 9:30 a 12:30</p>
                        <button className="button is-primary has-text-weight-bold is-small mt-1">¡ REGISTRATE YA !</button>
                    </div>
                </a>
            </div>
        )
    }
}

export default Header;
