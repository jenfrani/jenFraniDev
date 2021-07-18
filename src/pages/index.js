import * as React from "react";
import '../index.css';
import Layout from '../components/Layout';
import Timeline from "../components/Timeline";
import Milestone from "../components/Milestone";

// markup
const IndexPage = () => {
	return (
		<Layout>
			<h1>Hi</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Donec eu ligula ac mauris ornare condimentum id vel risus.
				Curabitur convallis posuere scelerisque. Integer accumsan non enim viverra feugiat.
				Proin placerat, eros in consequat pharetra, metus quam lacinia ligula, ut fringilla felis est eget eros.
				In hac habitasse platea dictumst. Pellentesque urna turpis.
			</p>
			<h2>Career Timeline</h2>
			<Timeline>
				<Milestone title="Test1" description="Desc1" />
				<Milestone title="Test1" description="Desc1" />
			</Timeline>
		</Layout>

	);
};

export default IndexPage;
