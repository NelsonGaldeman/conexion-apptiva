import React from 'react'

import twitter from '../assets/images/social/twitter.png';
import facebook from '../assets/images/social/facebook.png';
import instagram from '../assets/images/social/instagram.png';
import youtube from '../assets/images/social/youtube.png';
import linkedin from '../assets/images/social/linkedin.png';
import tiktok from '../assets/images/social/tiktok.png';

class Social extends React.Component {

    render() {
        return (
            <div>
                {/* <a href="https://twitter.com/apptivalo" target="_blank" rel="noreferrer"><img className={this.props.classes} src={twitter} alt="Twitter"/></a> */}
                <a href="https://www.facebook.com/Apptivalo-476624526218839/" target="_blank" rel="noreferrer"><img className={this.props.classes} src={facebook} alt="Facebook"/></a>
                <a href="https://www.instagram.com/apptivalo.app" target="_blank" rel="noreferrer"><img className={this.props.classes} src={instagram} alt="Instagram"/></a>
                <a href="https://youtube.com/channel/UCpn2u4AE55IK-xLiThAlBBw" target="_blank" rel="noreferrer"><img className={this.props.classes} src={youtube} alt="Youtube"/></a>
                <a href="https://www.linkedin.com/company/apptivalo" target="_blank" rel="noreferrer"><img className={this.props.classes} src={linkedin} alt="Linkedin"/></a>
                <a href="https://vm.tiktok.com/ZMdEuA7Yv/" target="_blank" rel="noreferrer"><img className={this.props.classes} src={tiktok} alt="TikTok"/></a>
            </div>
        )
    }
}

export default Social;
