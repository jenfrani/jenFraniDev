import React from 'react';
import styled from 'styled-components';

const SkillsList = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	margin-top: 20px;
`;

const Skill = styled.div`
	margin: 0 20px;
	min-width: 200px;
	font-weight: 300;
	font-size: 1.25em;
`;

const Layout = styled.div`
	margin: 30px auto;
`;

const Skills = (props) => {
	return (
		<Layout>
			<h1>Skills</h1>
			<SkillsList>
				{props.skills.map(skill => {
					return (
						<Skill>
							<span>&#9675;</span> {skill}
						</Skill>
					);
				})}
			</SkillsList>
		</Layout>
	);
};

export default Skills;