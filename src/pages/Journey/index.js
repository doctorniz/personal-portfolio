import React, {useState} from 'react';
import PageHeader from '../../components/PageHeader';
import Timeline from '../../components/Timeline';
import Paragraph from '../../components/Paragraph';


import './journey.scss';

const visOptions = {
	width: '100%',
	height: '200px',
	stack: false,
	showMajorLabels: true,
	showCurrentTime: true,
	zoomMin: 100,
    type: 'range',
    align: 'center',
	format: {
		minorLabels: {
			minute: 'h:mma',
			hour: 'ha'
		}
    }
};

const items = [
	{
        id: 1,
		start: new Date(2008, 10, 1),
		end: new Date(2014, 7, 1),
        content: 'Studied Medicine at Imperial College London',
        group: 1
    },
    {
        id: 2,
        start: new Date(2014, 8, 1),
        end: new Date(2015, 8, 1),
        content: "Intern at Queen's Hospital (Romford)",
        group: 2
    },
    {
        id: 3,
        start: new Date(2015, 8, 1),
        end: new Date(2016, 1, 1),
        title: "Resident",
        content: "Resident at St. Margaret's Hospital (Epping)",
        group: 2
    },
    {
        id:4,
        start: new Date(2016, 1, 1),
        end: new Date(2016, 8, 1),
        title: "Resident",
        content: "Resident at Princess Alexandra Hospital (Harlow)",
        group: 2
    },

];

const groups = [
    {
        id: 1,
        content: 'Study',
        style: "color: red; background-color: pink;"
    },
    {
        id: 2,
        content: 'Work'
    }
]



const Journey = props => {
    const [selected, setSelected] = useState('')
    const handleSelect = e => {
        if(e.items.length > 0) {
            setSelected(e.items[0])
        }
    }
    const handleHover = e => {
        if(e.item) {
            setSelected(e.item)
        }
    }
	return (
		<div className="journeyContainer" id="Journey">
			<PageHeader title="Journey" />
			<Timeline
				options={visOptions}
                items={items}
                groups={groups}
                className="journeyTimeline"
                handleClick={handleSelect}
                handleHover={handleHover}
			/>
            <Paragraph className="journeyParagraph">
                {selected && items.find(item => item.id === selected).content}
            </Paragraph>
		</div>
	);
};

export default Journey;
