import Pagopa from '@pagopa/pagopa-editorial-components/';
import { graphql } from 'gatsby';
import React from 'react';
import { Editorial } from './Editorial';
import { Feature } from './Feature';
import { Form } from './Form';
import { HowTo } from './HowTo';

// This object is used to map component names to React components
const componentsMap: {
	[key: string]: (props: any) => JSX.Element;
} = {
	Accordion: Pagopa.Accordion,
	BannerLink: Pagopa.BannerLink,
	Editorial: Editorial,
	Feature: Feature,
	Form: Form,
	Header: Pagopa.Header,
	Hero: Pagopa.Hero,
	HowTo: HowTo,
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
