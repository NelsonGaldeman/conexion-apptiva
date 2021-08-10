import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logos/main.png';
import '../assets/css/Colors.css';
import '../assets/css/TopBottom.css'

class Header extends React.Component {
    render() {
        return (
            <div>
                <figure className="image is-fullwidth is-centered is-vcentered">
                <img src={logo} className="is-hidden-mobile" alt="Conexión Apptivalo Logo"/>
                    <img src={logo} className="is-hidden-tablet mt-2 logo-size-mobile" alt="Conexión Apptivalo Logo"/>
                </figure>
                <Link to="/register">
                    <div className="is-hidden-mobile">
                        <p className="is-black is-size-4 is-inline">26 de Agosto </p>
                        <p className="has-text-primary is-inline">~</p>
                        <p className="is-black is-size-4 is-inline"> 9:30 a 12:30</p>
                        <br />
                        <button className="button is-primary has-text-weight-bold is-large mt-4">¡ REGISTRATE YA !</button>
                    </div>
                    <div className="is-hidden-tablet header-content-size-mobile">
                        <p className="is-black is-size-7 is-inline">26 de Agosto </p>
                        <p className="has-text-primary is-inline">~</p>
                        <p className="is-black is-size-7 is-inline"> 9:30 a 12:30</p>
                        <br />
                        <button className="button is-primary has-text-weight-bold is-small mt-1">¡ REGISTRATE YA !</button>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Header;
