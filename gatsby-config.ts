import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Firma con IO`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	graphqlTypegen: true,
	plugins: [
		`gatsby-transformer-yaml`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/content`,
			},
		},
	],
};

export default config;
