import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
	position: relative;
	margin: 0 auto;
	min-height: 500px;
	width: 100%;
	::before {
		content: "";
		background-color: #7EA2AA;
		width: 2px;
		height: 100%;
		position: absolute;
		transform: translateX(-50%);
		margin-left: 5%;
	}
`;

const Timeline = ({ children }) => {
	return (
		<>
			<h1>Career Timeline</h1>
			<TimelineContainer>
				{children}
			</TimelineContainer>
		</>
	);
};

export default Timeline;