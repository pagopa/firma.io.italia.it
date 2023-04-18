import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
		metaTitle: `Firma con IO`,
		siteUrl: `https://www.pagopa.firmaconio.it`, // TODO change to actual url
    metaDescription: ``,
    metaSocial: {
      socialNetwork: `twitter`,
      title: `https://www.twitterdomain.tld`,
      description: `author`,
      image: `/site-icon.png`,
    },
    keywords: ``,
    metaRobots: ``,
    metaViewport: `width=device-width, initial-scale=1, shrink-to-fit=no`,
  },
	graphqlTypegen: true,
	plugins: [
		`gatsby-transformer-yaml`,
    `gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/content`,
			},
		},
	],
};

export default config;
