import { useI18next } from 'gatsby-plugin-react-i18next';
import React from 'react';

import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export type SEOProps = {
	meta?: null | {
		readonly metaTitle: string | null;
		readonly metaDescription: string | null;
		readonly metaImage: {
			readonly localFile: { readonly publicURL: string | null } | null;
		} | null;
		readonly metaSocial: ReadonlyArray<{
			readonly description: string | null;
			readonly title: string | null;
			readonly socialNetwork: string | null;
		} | null> | null;
	};
};

export const SEO = ({ meta }: SEOProps) => {
	const { siteMetadata } = useSiteMetadata() || {};

	const seo = {
		title: meta?.metaTitle || siteMetadata?.metaTitle || '',
		description: meta?.metaDescription || siteMetadata?.metaDescription || '',
		twitter: meta?.metaSocial?.find((social) => social?.title === 'twitter'),
		metaImage: meta?.metaImage
			? `${process.env.API_URL}${meta?.metaImage?.localFile?.publicURL}`
			: '',
	};

	const { language } = useI18next();
	return (
		<>
			<Helmet
				htmlAttributes={{
					lang: language,
				}}
				title={seo.title}
				meta={[
					{
						name: `title`,
						content: seo.title,
					},
					{
						name: `description`,
						content: seo.description,
					},
					{
						name: `image`,
						content: seo.metaImage,
					},
					{
						property: `og:title`,
						content: seo.title,
					},
					{
						property: `og:description`,
						content: seo.description,
					},
					{
						property: `og:image`,
						content: `${seo.metaImage}`,
					},
					{
						property: `og:type`,
						content: `website`,
					},
					{
						name: `twitter:card`,
						content: `summary`,
					},
					{
						name: `twitter:title`,
						content: seo?.twitter?.title || '',
					},
					{
						name: `twitter:description`,
						content: seo?.twitter?.description || '',
					},
				]}
			/>

			<Helmet>
				<script type="application/ld+json">
					{`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://www.pagopa.it/it/",
            "logo": "https://www.pagopa.it/pagopa.svg"
          }`}
				</script>

				<script type="application/ld+json">
					{`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "additionalType": "Technology Company",
            "name": "PagoPA S.p.A.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Via Sardegna 38",
              "addressLocality": "Roma",
              "addressRegion": "RM",
              "postalCode": "00187",
              "addressCountry": "IT"
            },
            "department": [
              {
                "@type": "Organization",
                "name": "Sede Legale",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Piazza Colonna 370",
                  "addressLocality": "Roma",
                  "addressRegion": "RM",
                  "postalCode": "00187",
                  "addressCountry": "IT"
                }
              }, {
                "@type": "Organization",
                "name": "Sede Operativa",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Via Sardegna 38",
                  "addressLocality": "Roma",
                  "addressRegion": "RM",
                  "postalCode": "00187",
                  "addressCountry": "IT"
                }
              }
            ],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 41.9095736,
              "longitude": 12.4914426
            },
            "url": "https://www.pagopa.it/it/"
          }`}
				</script>
			</Helmet>
		</>
	);
};
