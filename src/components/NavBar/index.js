import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import './nav.scss';

const NavBar = props => {
	const [menuVisible, toggleMenuVisible] = useState(false);
	const [isPageTop, changePageTop] = useState(true);
	const linkComponents = props.links.map((each, i) => (
		<li key={i}>
			<span onClick={() => handleClick(each)}> {each.text} </span>
		</li>
	));
	const handleClick = input => {
		const {external, link, page} = input;
		if (page) props.setCurrentPage(page);
		if (external) {
			window.open(link);
		} else {
			props.history.push(link);
		}
	};
	const handleScroll = () => {
		if (window.scrollY === 0 && !isPageTop) {
			changePageTop(true);
		}
		if (window.scrollY !== 0 && isPageTop) {
			changePageTop(false);
		}
	};

	const Scroll = () => {
		useEffect(() => {
			window.addEventListener('scroll', handleScroll);
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		});
		return null;
	};

	return (
		<nav
			id="nav"
			className={`nav ${menuVisible ? 'open' : ''} ${
				isPageTop ? '' : 'sticky'
			}`}
		>
			<button className="menu" onClick={() => toggleMenuVisible(!menuVisible)}>
				<em className="hamburger" />
			</button>
			<div className="brand">
				<Link to="/">{props.brand}</Link>
			</div>
			<ul className="navbar">
				{linkComponents}
				<input
					maxLength={5}
					className="navbar-input"
					placeholder="ENTER YOUR CODE"
					type="text"
				/>
			</ul>
			<Scroll />
		</nav>
	);
};

export default withRouter(NavBar);
