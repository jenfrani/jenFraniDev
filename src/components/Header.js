import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { Link } from 'gatsby';

const HeaderContainer = styled.header`
	display: flex;
	/* width: 100%; */
`;

const Header = () => {
	return (
		<HeaderContainer>
			<Link title="Home - Jeneel Frani" to="/">
				<Logo />
			</Link>
		</HeaderContainer>
	);
};

export default Header;