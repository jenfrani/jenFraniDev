import styled from "styled-components";
import React from "react";
import Header from "./Header";

const LayoutContainer = styled.div`
	background-color: #F2F2F2;
	padding: 2.5em 2em;
`;

const Layout = ({ children }) => {
	return (
		<LayoutContainer>
			<Header />
			{children}
		</LayoutContainer>
	);

};

export default Layout;