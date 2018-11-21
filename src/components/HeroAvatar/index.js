import React from 'react';

const HeroAvatar = (props) => {
    return (<div className="hero-avatar">
            <img src={props.avatar} alt="Avatar" />
        </div>)
}

export default HeroAvatar;