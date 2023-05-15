import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	siteMetadata: {
		metaTitle: `Firma con IO`,
		siteUrl: `https://www.pagopa.firma.it`, // TODO change to actual url
		metaDescription: `PagoPA S.p.A. è una società pubblica ad alto livello specialistico, che ha la mission di diffondere i servizi pubblici digitali attraverso lo sviluppo di progetti innovativi e la gestione di infrastrutture tecnologiche strategiche per accompagnare la modernizzazione della Pubblica Amministrazione e del Paese.`,
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
	flags: {
		DEV_SSR: false, // enable ssr in development
	},
	graphqlTypegen: true,
	plugins: [
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-transformer-yaml`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/assets`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/content/page`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/content/layout`,
			},
		},
	],
};

export default config;
