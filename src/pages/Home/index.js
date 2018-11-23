import React, {useState} from 'react';
import './Home.css';
import {SocialIcon} from 'react-social-icons';
import {Link} from 'react-router-dom';

const randomQuotes = [
	{
		quote: "It wasn't raining when Noah built the ark.",
		source: 'Howard Ruff'
	},
	{
		quote: 'Run the day, or the day runs you.',
		source: 'Jim Rohn'
	},
	{
		quote: 'If not us, who? If not now, when?',
		source: 'John F. Kennedy'
	},
	{
		quote: 'Speak less than you know, have more than you show.',
		source: 'William Shakespeare'
	},
	{
		quote: 'Do one thing every day that scares you.',
		source: 'Eleanor Roosevelt'
	}
];

const Home = ({setCurrentPage}) => {
	const [code, setCode] = useState('');
	const [codeError, setCodeError] = useState(false);
	const [quoteIndex, setQuote] = useState(
		Math.floor(Math.random() * randomQuotes.length)
	);

	return (
		<div className="eachPage homePage" id="Home">
			<div className="title"> nizar ahmed ismail </div>
			<div
				className="quoteBar"
				onClick={() =>
					setQuote(Math.floor(Math.random() * randomQuotes.length))
				}
			>
				<div className="quoteBarQuote">"{randomQuotes[quoteIndex].quote}"</div>
				<div className="quoteBarSource">-{randomQuotes[quoteIndex].source}</div>
			</div>
			<div className="menuBar">
				<Link to="/doctor" onClick={() => setCurrentPage('Bio')}>
					{' '}
					doctor{' '}
				</Link>
				<Link to="/programmer"> programmer </Link>
			</div>

			<input
				placeholder="Enter CODE"
				id="codeInput"
				value={code}
				onChange={e => setCode(e.target.value)}
			/>
			{codeError && <div> Unable to find code {codeError} </div>}

			<div className="socialMedia">
				<SocialIcon url="http://twitter.com/realdoctorniz" />
				<SocialIcon url="https://www.instagram.com/doctorniz" />
				<SocialIcon url="https://scholar.google.co.uk/citations?user=mAwUylMAAAAJ&hl=en" />
				<SocialIcon url="https://github.com/doctorniz" />
				<SocialIcon url="https://medium.com/@doctorniz" />
			</div>
		</div>
	);
};

export default Home;
