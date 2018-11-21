import React from 'react';

const HeroHandle = (props) => {
    return (<div className="hero-handle"> 
        <a href={props.link}> {props.text} </a>
    </div>)
}

export default HeroHandle;