import React from 'react';

const spanStyle = (i, n) => {
	const j = i + 1;
	if (n === 1) {
		return {
			width: '100%',
			justifySelf: 'center',
			alignSelf: 'center',
			fontSize: '6.0rem'
		};
	}
	if (n / j > 2) {
		return {
			width: '100%',
			height: '100%',
			justifySelf: 'center',
			textAlign: 'left',
			alignSelf: 'center',
			marginLeft: `${(n / j) * 40 + 10}px`,
			fontSize: `${7 / n + 4}rem`
		};
	}
	if (n / j === 2 || (n + 1) / j === 2) {
		return {
			width: '100%',
			justifySelf: 'center',
			alignSelf: 'center',
			textAlign: 'center',
			fontSize: `${7 / n + 4}rem`
		};
	}
	return {
		width: '100%',
		justifySelf: 'center',
		alignSelf: 'center',
		textAlign: 'right',
		marginRight: `${(n / (n-i)) * 40 + 10}px`,
		fontSize: `${7 / n + 4}rem`
	};
};

const HeroTitle = props => {
	const parseText = (value, i, n) => (
		<span key={i} style={spanStyle(i, n)}>
			{value}
		</span>
	);
	const n = Array.isArray(props.text) ? props.text.length : 1;
	const textElements = Array.isArray(props.text)
		? props.text.map((a, i) => parseText(a, i, n))
		: parseText(props.text, 0, n);
	return <div className="hero-title">{textElements}</div>;
};

export default HeroTitle;
