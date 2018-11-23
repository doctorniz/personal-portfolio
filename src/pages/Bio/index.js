import React, {useState} from 'react';
import TagCloud from 'react-d3-cloud';

import './Bio.css';

const tags = {
	MED: [
		{value: '2008', weight: 10},
		{value: 'Imperial College', weight: 15},
		{value: 'Internal Medicine', weight: 20},
		{value: 'Intensive Care', weight: 6},
		{value: 'Cardiology', weight: 7}
	],
	IT: [
		{value: 'JavaScript', weight: 20},
		{value: 'CSS', weight: 10},
		{value: 'HTML', weight: 10},
		{value: 'React', weight: 20}
	]
};

const Bio = ({bioType}) => {
	const [format, setFormat] = useState(bioType);
	const formattedData = type => {
		switch (type) {
			case 'MED':
			case 'IT':
				return tags[type].map(tag => ({
					text: tag.value,
					value: tag.weight * 8
				}));
			case 'ALL':
				let formattedTags = [];
				for (const i in tags) {
					formattedTags = [...tags[i], ...formattedTags];
				}
				console.log(formattedTags);
				return formattedTags.map(tag => ({
					text: tag.value,
					value: tag.weight * 8
				}));
		}
	};
	console.log(bioType);
	return (
		<div className="eachPage bioPage" id="Bio">
			<div>
				<TagCloud data={formattedData(bioType)} />
			</div>
		</div>
	);
};

export default Bio;
