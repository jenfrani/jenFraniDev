import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.section`
	position: relative;
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

	@media (min-width: 480px) {
		::before {
			content: "";
			background-color: #7EA2AA;
			width: 2px;
			height: 100%;
			position: absolute;
			transform: translateX(-50%);
			margin-left: 50%;
		}
	}
`;

const Layout = styled.div`
	margin: 30px auto;
`;

const Timeline = ({ children }) => {
	return (
		<Layout>
			<h1>Career Timeline</h1>
			<TimelineContainer>
				{children}
			</TimelineContainer>
		</Layout>
	);
};

export default Timeline;;