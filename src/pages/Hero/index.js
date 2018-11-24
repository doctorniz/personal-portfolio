import React, {useState} from 'react';
import './Hero.scss';
import Background from '../../components/Background';
import HeroTitle from '../../components/HeroTitle';
import HeroHandle from '../../components/HeroHandle';
import HeroTagline from '../../components/HeroTagline';
import path from 'path';

const STOREY_BRIDGE = 'storeybridge.jpg';
const PROFILE_PIC =
	'https://media.licdn.com/dms/image/C5603AQH8hHINyQBWaQ/profile-displayphoto-shrink_200_200/0?e=1548288000&v=beta&t=Mw_jdb3iwC4X4oMsoL7ycQJr3ko4mKwKuCCZoBYA5nw';

const Hero = props => {
	const backgroundUrl = props.backgroundURL
		? props.backgroundURL
		: STOREY_BRIDGE;

	return (
		<Background backgroundUrl={backgroundUrl}>
			<div id="Hero" className="hero-container">
				<HeroTitle text={['Nizar', '/', 'Ismail']} />
				<HeroHandle text={'@doctorniz'} />
				<HeroTagline tagline="doctor · entrepneur · developer" />
			</div>
		</Background>
	);
};

export default Hero;
