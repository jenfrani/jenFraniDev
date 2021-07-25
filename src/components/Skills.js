import React from 'react';
import styled from 'styled-components';

const SkillsList = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	margin-top: 20px;
	@media (min-width: 480px) {
		justify-content: space-evenly;
	}
`;

const Skill = styled.div`
	margin: 0 20px;
	min-width: 200px;
	font-weight: 300;
	font-size: 1.25em;
	display: flex;
	flex-direction: column;
`;

const Layout = styled.div`
	margin: 30px auto;
`;
const Skills = () => {
	return (
		<Layout>
			<h1>Skills</h1>
			<SkillsList>
				<>
					<Skill>
						<div>
							<span>&#9675;</span> HTML & CSS
						</div>
						<div>
							<span>&#9675;</span> Javascript ES6
						</div>
					</Skill>
					<Skill>
						<div>
							<span>&#9675;</span> React
						</div>
						<div>
							<span>&#9675;</span> ASP.Net/C#
						</div>
					</Skill>
					<Skill>
						<div>
							<span>&#9675;</span> Git
						</div>
						<div>
							<span>&#9675;</span> SQL
						</div>
					</Skill>
				</>
			</SkillsList>
		</Layout>
	);
};

export default Skills;