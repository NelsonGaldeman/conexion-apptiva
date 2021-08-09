import React from 'react'

import twitter from '../assets/images/social/twitter.png';
import facebook from '../assets/images/social/facebook.png';
import instagram from '../assets/images/social/instagram.png';

class Social extends React.Component {

    render() {
        return (
            <div>
                {/* <a href="https://twitter.com/apptivalo" target="_blank" rel="noreferrer"><img className={this.props.classes} src={twitter} alt="Twitter"/></a> */}
                <a href="https://www.facebook.com/Apptivalo-476624526218839/" target="_blank" rel="noreferrer"><img className={this.props.classes} src={facebook} alt="Facebook"/></a>
                <a href="https://www.instagram.com/apptivalo.app" target="_blank" rel="noreferrer"><img className={this.props.classes} src={instagram} alt="Instagram"/></a>
            </div>
        )
    }
}

export default Social;
