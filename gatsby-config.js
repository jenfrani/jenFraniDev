module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "jFraniCode",
	},
	plugins: [
		{
			resolve: "gatsby-source-wordpress",
			options: {
				url: "http://jfranicodes.local/graphql",
			},
		},
		"gatsby-plugin-styled-components",
		"gatsby-plugin-gatsby-cloud",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
	],
};
