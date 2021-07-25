import styled from "styled-components";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const LayoutContainer = styled.div`
	background-color: #F2F2F2;
	padding: 2.5em 2em;
	@media (min-width: 959px) {
		padding:  5% 10%;
		margin: 0 auto;
	}
`;

const Layout = ({ children }) => {
	return (
		<>
			<LayoutContainer>
				<Header />
				{children}
			</LayoutContainer>
			<Footer />
		</>
	);

};

export default Layout;