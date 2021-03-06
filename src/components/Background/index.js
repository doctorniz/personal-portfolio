import React from 'react';

const isURL = str =>
	/^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(str);

const Background = props => {
	let {backgroundUrl} = props;
	if (!isURL(backgroundUrl)) {
		backgroundUrl = `./images/${backgroundUrl}`;
	}
	return (
		<div
			style={{
				background: `url(${backgroundUrl})`,
				backgroundRepeat: 'none',
				backgroundSize: 'cover',
				backgroundAttachment: 'fixed',
				height: '100vh',
				width: '100%',
				zIndex: '-100'
			}}
		>
			{props.children}
		</div>
	);
};
export default Background;
