import React from 'react';
import './avatar.css';

const Avatar = props => {
	return (
		<div
			className="pageAvatar"
			style={{
				background: `url(${props.avatar})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				...props.style
			}}
		/>
	);
};

export default Avatar;
