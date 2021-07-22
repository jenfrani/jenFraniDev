import React from 'react';
import logo from '../images/Logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
	position: relative;
	background-image: url(${logo});
	height: 75px;
	width: 75px;
	background-repeat: no-repeat;
	background-size: contain;
	margin-bottom: 1rem;
	`;

const Logo = () => {
	return <LogoContainer />;
};

export default Logo;