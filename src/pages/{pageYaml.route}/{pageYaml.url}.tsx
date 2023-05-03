import { graphql } from 'gatsby';
import React from 'react';
import { BlocksRenderer } from '../../components/BlocksRenderer';
import { SEO } from '../../components/SEO';

const MdxPage = ({
	data: {
		pageYaml: { components, seo },
	},
}: {
	data: Queries.PageYamlQuery;
}) => {
	return (
		<>
			<SEO meta={seo} />
			<BlocksRenderer blocks={components} />
		</>
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
