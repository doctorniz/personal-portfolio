import React, {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router';

import NavBar from './components/NavBar';
import Hero from './pages/Hero';
import About from './pages/About';
import Journey from './pages/Journey';
import Works from './pages/Works';
import Contact from './pages/Contact';


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
			<Route path="/@:path" render={()=> null} />
			<Route path="/:path?" render={({params}) => (
				<>
					<About  params={params} />
					<Journey params={params} />
					<Works params={params} />
				</>
			)} />
			</Switch>
			
			

			<Contact />
		</div>
	);
};
