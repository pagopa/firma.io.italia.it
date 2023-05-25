import { graphql } from 'gatsby';
import React from 'react';
import { BlocksRenderer } from '../../components/BlocksRenderer';
import { Layout } from '../../components/Layout';

const MdxPage = ({
	data: {
		pageYaml: { components, seo },
	},
}: {
	data: Queries.PageYamlQuery;
}) => {
	return (
		<Layout seo={seo}>
			<BlocksRenderer blocks={components} />
		</Layout>
	);
};

export function Head() {
	return (
		<>
			<link
				rel="apple-touch-icon"
				href="favicons/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				href="favicons/favicon-32x32.png"
				sizes="32x32"
				type="image/png"
			/>
			<link
				rel="icon"
				href="favicons/favicon-16x16.png"
				sizes="16x16"
				type="image/png"
			/>
			<link rel="manifest" href="manifest.json" />
			<link
				rel="mask-icon"
				href="favicons/safari-pinned-tab.svg"
				color="#0066CC"
			/>
			<link rel="icon" href="favicons/favicon.ico" />
			<meta name="theme-color" content="#0066CC" />
		</>
	);
}

export const query = graphql`
	query PageYaml($id: String) {
		pageYaml(id: { eq: $id }) {
			...Components
			seo {
				metaDescription
				metaImage {
					localFile {
						publicURL
					}
				}
				metaSocial {
					description
					socialNetwork
					title
				}
				metaTitle
			}
		}
	}
`;

export default MdxPage;
