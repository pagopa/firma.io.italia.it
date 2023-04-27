import Pagopa from '@pagopa/pagopa-editorial-components/';
import { graphql } from 'gatsby';
import React from 'react';
import { Editorial } from './Editorial';
import { Feature } from './Feature';
import { Form } from './Form';
import { HowTo } from './HowTo';
import { Hero } from './Hero';

// This object is used to map component names to React components
const componentsMap: {
	[key: string]: (props: any) => JSX.Element;
} = {
	Accordion: Pagopa.Accordion,
	BannerLink: Pagopa.BannerLink,
	Editorial,
	Feature,
	Form,
	Footer: Pagopa.Footer,
	Header: Pagopa.Header,
	Hero,
	HowTo,
	PhotoVideo: Pagopa.PhotoVideo,
};

const Block = ({
	block,
}: {
	block: Queries.BlocksUnionFragment;
}): JSX.Element => {
	const Component = componentsMap[block.type];
	return !!Component ? (
		<div id={block.slug} key={block.slug}>
			<Component { ...block }  />
		</div>
	) : null;
};

// This function renders a list of blocks
export const BlocksRenderer = ({
	blocks,
}: {
	blocks: ReadonlyArray<Queries.BlocksUnionFragment>;
}) => (
	<>
		{blocks?.map((block, index) => (
			<Block key={index} block={block} />
		))}
	</>
);

export const query = graphql`
	fragment Hero on PageYamlComponents {
		theme
		title
		subtitle
		background
		size
	}
	fragment Header on PageYamlComponents {
		product
		theme
		menu {
			theme
			label
			href
			target
			active
		}
	}
	fragment Editorial on PageYamlComponents {
		eyelet
		title
		body
		width
		reversed
		image {
			src
			alt
		}
		ctaButtons {
			text
			href
			target
			variant
		}
	}
	fragment Feature on PageYamlComponents {
		theme
		title
		items {
			title
			subtitle
		}
	}
	fragment HowTo on PageYamlComponents {
		theme
		title
		steps {
			title
			description
		}
		rowMaxSteps
		stepsAlign
	}
	fragment PhotoVideo on PageYamlComponents {
		src
		theme
		title
		subtitle
		full
	}
	fragment Form on PageYamlComponents {
		title
		notice {
			newsletter
			privacy
		}
	}
	fragment BannerLink on PageYamlComponents {
		decoration
		theme
		body
		title
		ctaButtons {
			text
			variant
			href
			target
		}
	}
	fragment Accordion on PageYamlComponents {
		theme
		title
		layout
		accordionItems {
			header
			content
		}
	}
	fragment Footer on PageYamlComponents {
		links {
			aboutUs {
				title
				links {
					label
					href
					ariaLabel
					linkType
				}
			}
			resources {
				title
				links {
					label
					href
					ariaLabel
					linkType
				}
			}
			followUs {
				title
				links {
					label
					href
					ariaLabel
					linkType
				}
				socialLinks {
					icon
					title
					href
					ariaLabel
				}
			}
		}
		languages {
			it {
				it
				en
				fr
			}
			en {
				it
				en
				fr
			}
			fr {
				it
				en
				fr
			}
		}
		companyLink {
			href
			ariaLabel
		}
		legalInfo
		currentLangCode
		productsJsonUrl
	}
	fragment BlocksUnion on PageYamlComponents {
		type
		slug
		...Accordion
		...BannerLink
		...Editorial
		...Feature
		...Footer
		...Form
		...Header
		...Hero
		...HowTo
		...PhotoVideo
	}
	fragment Components on PageYaml {
		components {
			...BlocksUnion
		}
	}
`;
