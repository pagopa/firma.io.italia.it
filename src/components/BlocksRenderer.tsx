import { BannerLink, PhotoVideo } from '@pagopa/pagopa-editorial-components';
import { graphql } from 'gatsby';
import React from 'react';
import { Editorial } from './Editorial';
import { Feature } from './Feature';
import { Form } from './Form';
import { Hero } from './Hero';
import { HowTo } from './HowTo';
import Accordion from './Accordion';
import Privacy from './Privacy';
import Terms from './Terms';

// This object is used to map component names to React components
const componentsMap: {
	[key: string]: (props: any) => JSX.Element;
} = {
	Accordion,
	BannerLink,
	Editorial,
	Feature,
	Form,
	Hero,
	HowTo,
	PhotoVideo,
	Privacy,
	Terms
};

const Block = ({
	block,
}: {
	block: Queries.BlocksUnionFragment;
}): JSX.Element => {
	const Component = componentsMap[block.type];
	return !!Component ? (
		<div id={block.slug} key={block.slug}>
			<Component {...block} />
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
		background {
			childImageSharp {
				gatsbyImageData(layout: FULL_WIDTH)
			}
		}
		size
	}
	fragment Editorial on PageYamlComponents {
		eyelet
		title
		body
		width
		reversed
		image {
			src {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED)
				}
			}
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
		autoplay
		loop
		useYoutubeLayout
	}
	fragment Privacy on PageYamlComponents {
		content
	}
	fragment Form on PageYamlComponents {
		title
		subtitle
		privacy
	}
	fragment BannerLink on PageYamlComponents {
		decoration {
			src
			alt
		}
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
	fragment BlocksUnion on PageYamlComponents {
		type
		slug
		...Accordion
		...BannerLink
		...Editorial
		...Feature
		...Form
		...Hero
		...HowTo
		...PhotoVideo
		...Privacy
	}
	fragment Components on PageYaml {
		components {
			...BlocksUnion
		}
	}
`;
