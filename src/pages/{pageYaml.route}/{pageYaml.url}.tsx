import { graphql } from 'gatsby';
import React from 'react';
import { BlocksRenderer } from '../../components/BocksRenderer';

const MdxPage = ({
	data: {
		pageYaml: {
			components
		},
	},
}: {
	data: Queries.PageYamlQuery;
}) => {
	return <BlocksRenderer blocks={components} />;
}

export const query = graphql`
	query PageYaml($id: String) {
		pageYaml(id: { eq: $id }) {
			...Components
		}
	}
`;

export default MdxPage;
