import React from 'react';
import {Link} from 'react-router-dom'

const HeroHandle = props => {
	return (
		<div className="hero-handle">
			<Link to='/contact'> {props.text} </Link>
		</div>
	);
};

export default HeroHandle;
