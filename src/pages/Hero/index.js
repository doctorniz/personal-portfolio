import React, { useState } from 'react'
import './Hero.scss'
import HeroBackground from '../../components/HeroBackground';
import HeroTitle from '../../components/HeroTitle';
import HeroHandle from '../../components/HeroHandle';
import HeroTagline from '../../components/HeroTagline';
import HeroAvatar from '../../components/HeroAvatar'

const STOREY_BRIDGE = "https://www.visitbrisbane.com.au/~/media/brisbane-marketing/products/atdw/2017/09/25/02/18/story-bridge-59c6f58e744a95b24fa185e5-4x3.ashx?h=1536&w=2048"
const PROFILE_PIC = "https://media.licdn.com/dms/image/C5603AQH8hHINyQBWaQ/profile-displayphoto-shrink_200_200/0?e=1548288000&v=beta&t=Mw_jdb3iwC4X4oMsoL7ycQJr3ko4mKwKuCCZoBYA5nw";

const Hero = (props) => {
    
    const backgroundURL = props.backgroundURL ? props.backgroundURL : STOREY_BRIDGE;

    return (<div id="Hero" className="hero-container">
        <HeroBackground backgroundURL={backgroundURL} />
        <HeroAvatar avatar={PROFILE_PIC}/>
        <HeroTitle text={["Nizar", "/", "Ismail"]} />
        <HeroHandle text={"@doctorniz"} link="" />
        <HeroTagline tagline="doctor · entrepneur · developer" />
    </div>)
}

export default Hero