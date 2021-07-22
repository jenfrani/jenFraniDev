import React from 'react';
import styled from 'styled-components';

const MilestoneMarker = styled.div`
	height: 50px;
	width: 50px;
	margin-left: calc(5% - 25px);
	background: #CBD0D1;
	border-radius: 50%;
	min-width: 50px;
	@media (min-width: 480px) {
	}
`;

const MilestoneContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	position: relative;
	z-index: 1;
	will-change: transform;
	margin: 2.5rem 0;

	@media (min-width: 480px) {
		&:nth-child(even) {
			flex-direction: row-reverse;
			${MilestoneMarker} {
				margin-right: calc(5% - 25px);
				order: 1;
			}
		}
		&:nth-child(odd) ${MilestoneMarker} {
			order: 1;
		}
	}
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 16px;
	background: #FFFFFF;
	border: 1px solid rgba(136, 141, 167, 0.5);
	box-sizing: border-box;
	border-radius: 5px;
	flex-grow: 1;
	margin-left: 1.25rem;
	/* max-width: 500px; */

	@media (min-width: 480px) {
		flex-grow: 0;
		width: 45%;
		margin: 0;
	}
`;

const Title = styled.h3`
	text-transform: uppercase;
`;

const Milestone = (props) => {
	return (
		<MilestoneContainer>
			<MilestoneMarker />
			<TextContainer>
				<Title>{props.title}</Title>
				<h4>{props.description}</h4>
				<h4>{props.location}</h4>
				<h5>{props.date}</h5>

			</TextContainer>
		</MilestoneContainer>
	);
};

export default Milestone;