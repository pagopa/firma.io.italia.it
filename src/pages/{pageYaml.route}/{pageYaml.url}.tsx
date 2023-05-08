import { graphql } from 'gatsby';
import React from 'react';
import { BlocksRenderer } from '../../components/BlocksRenderer';
import { SEO } from '../../components/SEO';
import Layout from '../../Layout';

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
