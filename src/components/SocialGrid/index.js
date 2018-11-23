import React from 'react';
import {SocialIcon} from 'react-social-icons';
import './socialgrid.scss';

const SocialGrid = ({socialLinks = []}) => {
    return (
        <div className="socialGrid">
            {socialLinks.map((social,index) => <SocialIcon url={social} key={index} />)}
            
        </div>
    )
}

export default SocialGrid