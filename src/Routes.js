import React, {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router';

import NavBar from './components/NavBar';
import Hero from './pages/Hero';
import About from './pages/About';
import Journey from './pages/Journey';
import Works from './pages/Works';
import Contact from './pages/Contact';

import Bio from './pages/Bio';

import './App.css';

const links = [
	{text: 'Doctor', link: '/doctor', page: 'About'},
	{text: 'Developer', link: '/developer', page: 'About'},
	{text: 'Contact', link: '/contact', page: 'Contact'}
];

export default () => {
	const [currentPage, setCurrentPage] = useState('Hero');
	useEffect(() => {
		const element = document.querySelector(`#${currentPage}`);
		if (element) element.scrollIntoView('smooth');
	});
	return (
		<div>
			<NavBar
				links={links}
				brand="nizarismail.com"
				setCurrentPage={setCurrentPage}
			/>
			<Hero />
			<Switch>
				<Route exact path="/" render={() => <About bioType="ALL" />} />
				<Route path="/doctor" render={() => <About bioType="MED" />} />
				<Route path="/developer" render={() => <About bioType="IT" />} />
			</Switch>

			<Switch>
				<Route exact path="/" render={() => <Journey bioType="ALL" />} />
				<Route path="/doctor" render={() => <Journey bioType="MED" />} />
				<Route path="/developer" render={() => <Journey bioType="IT" />} />
			</Switch>

			<Switch>
				<Route exact path="/" render={() => <Works bioType="ALL" />} />
				<Route path="/doctor" render={() => <Works bioType="MED" />} />
				<Route path="/developer" render={() => <Works bioType="IT" />} />
			</Switch>

			<Switch>
				<Route exact path="/" render={() => <Bio bioType="ALL" />} />
				<Route path="/doctor" render={() => <Bio bioType="MED" />} />
				<Route path="/developer" render={() => <Bio bioType="IT" />} />
			</Switch>

			<Contact />
		</div>
	);
};
