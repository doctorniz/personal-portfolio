import React, {useState} from 'react';
import PageHeader from '../../components/PageHeader';
import PortfolioGrid from '../../components/PortfolioGrid';
import Paragraph from '../../components/Paragraph';


import './works.scss'


const portfolio = [
    {
		thumbnail: 'microservices.png',
		title: "Microservices",
		description: "During my journey with FreeCodeCamp, I built an array of microservices on the back of node.js and JavaScript and was one of my first ventures into exploring the REST API",
		technologies: ['HTML', 'CSS', 'JavaScript', 'node.js', 'REST'],
		date: new Date(2017, 8, 1),
		link: ""
    }
]

const Works = props => {
	const [selected, setSelected] = useState({})
	const handleSelect = (event) => {
		const index = event.target.getAttribute('index')
		if(portfolio[index]) setSelected(portfolio[index])
	}
	return (
		<div className="worksPage" id="Works">
			<PageHeader title="Works" />
			<PortfolioGrid portfolio={portfolio} handleSelect={handleSelect}/>
			<Paragraph className="worksParagraph">

				{selected ? (
				<> 
					<div className="worksPTitle">
					{selected.title} 
					</div>
					<div className="worksPDesc">
					{selected.description} 
					</div>
					{selected.technologies && selected.technologies.length> 0 ? (<div> Technologies: {selected.technologies.join(", ")} </div>) : null}
				</>) : null}
			</Paragraph>
		</div>
	);
};

export default Works;
