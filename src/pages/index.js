import * as React from "react";
import '../index.css';
import Layout from '../components/Layout';
import Timeline from "../components/Timeline";
import Milestone from "../components/Milestone";
import Skills from "../components/Skills";

// markup
const IndexPage = () => {
	return (
		<Layout>
			<section>
				<h1>Jen Frani</h1>
				<h4>Developer, Creative</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec eu ligula ac mauris ornare condimentum id vel risus.
					Curabitur convallis posuere scelerisque. Integer accumsan non enim viverra feugiat.
					Proin placerat, eros in consequat pharetra, metus quam lacinia ligula, ut fringilla felis est eget eros.
					In hac habitasse platea dictumst. Pellentesque urna turpis.
				</p>
			</section>
			<section>
				<Skills skills={['HTML & CSS', 'Javascript ES6', 'React', 'ASP.Net/C#', 'Git', 'SQL']} />
			</section>
			<Timeline>
				<Milestone title="Information Technology" description="Bachelor's Degree" location="STI College, Philippines" date="October 2012" />
				<Milestone title="Software Engineer" location="Accenture, Philippines" date="Dec 2013 - Apr 2017" />
				<Milestone title="Software Engineer" location="Infor, Philippines" date="May 2017 - Jul 2019" />
				<Milestone title="Moved to Canada" location="Edmonton, Alberta" date="August 2019" />
				<Milestone title="Technology Management" description="Bachelor's Degree" location="NAIT, Alberta" date="June 2021" />
			</Timeline>
		</Layout>

	);
};

export default IndexPage;
