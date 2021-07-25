import React from 'react';
import styled from 'styled-components';

const ParagraphContainer = styled.p`
	white-space: nowrap;
	margin: 0 0 8px 0;
	@media (min-width: 480px) {
		max-width: 70%;
	}
`;

const Paragraph = ({ children }) => {
	return (
		<ParagraphContainer>
			{children}
		</ParagraphContainer>
	);
};

export default Paragraph;