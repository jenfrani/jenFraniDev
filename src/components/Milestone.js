import React from 'react';
import styled from 'styled-components';

const MilestoneContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	position: relative;
	z-index: 1;
	will-change: transform;
	margin: 2.5rem 0;
`;

const MilestoneMarker = styled.div`
	height: 50px;
	width: 50px;
	margin-left: calc(5% - 25px);
	background: #8BE8CB;
	box-shadow: 4px 4px 0px rgba(139, 232, 203, 0.25);
	border-radius: 50%;	
	/* order: 1; */
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 16px;
	background: #FFFFFF;
	border: 1px solid #888DA7;
	box-sizing: border-box;
	box-shadow: 4px 4px 0px rgba(139, 232, 203, 0.25);
	border-radius: 2px;
	flex-grow: 1;
	margin-left: 1.25rem;
`;

const Milestone = (props) => {
	return (
		<MilestoneContainer>
			<MilestoneMarker />
			<TextContainer>
				<h3>{props.title}</h3>
				<h4>{props.description}</h4>
			</TextContainer>
		</MilestoneContainer>
	);
};

export default Milestone;