import React from 'react';
import VisTimeline from 'react-visjs-timeline';

const Timeline = ({options, items, className, groups, handleClick, handleHover, ...props}) => {
	return (
		<div className={`${className}`}>
			<VisTimeline options={options} items={items} groups={groups} selectHandler={handleClick} mouseOverHandler={handleHover} />{' '}
		</div>
	);
};

export default Timeline;
