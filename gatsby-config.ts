import * as dotenv from 'dotenv';
import type { GatsbyConfig } from 'gatsby';

dotenv.config();

const SITE_URL = process.env.SITE_URL || 'https://firma.io.italia.it';

const config: GatsbyConfig = {
	siteMetadata: {
		metaTitle: `Firma con IO`,
		siteUrl: SITE_URL,
		metaDescription: `PagoPA S.p.A. è una società pubblica ad alto livello specialistico, che ha la mission di diffondere i servizi pubblici digitali attraverso lo sviluppo di progetti innovativi e la gestione di infrastrutture tecnologiche strategiche per accompagnare la modernizzazione della Pubblica Amministrazione e del Paese.`,
		metaSocial: {
			socialNetwork: `twitter`,
			title: `https://www.twitterdomain.tld`,
			description: `pagoPa S.p.A.`,
			image: `/assets/social-card.png`,
		},
		keywords: ``,
		metaRobots: ``,
		metaViewport: `width=device-width, initial-scale=1, shrink-to-fit=no`,
	},
	flags: {
		DEV_SSR: false, // enable ssr in development
	},
	graphqlTypegen: {
		typesOutputPath: `/types/gatsby-types.d.ts`,
		generateOnBuild: false,
	},
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
