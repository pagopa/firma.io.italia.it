import Pagopa from '@pagopa/pagopa-editorial-components/';
import { graphql } from 'gatsby';
import React from 'react';
import { Editorial } from './Editorial';
import { Feature } from './Feature';
import { Form } from './Form';
import { HowTo } from './HowTo';
import * as MUI from '@mui/material';
import * as MI from '@mui/icons-material';
import JsxParser from 'react-jsx-parser';

export const renderJSX = (JSX: string) => {
	try {
	const isJSX = RegExp.prototype.test.bind(/(<([^>]+)>)/i);
	// @ts-ignore
    if (isJSX(JSX)) return <JsxParser components={{ ...MUI, ...MI}} jsx={JSX}/>
	return false;
  } catch (e) {
	console.error(e);
    return false
  }
};


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
	const enhancedBlockProps = Object.entries(block).reduce( ( accu, [key, value]) => ({ ...accu, [key]: renderJSX(`${value}`) || value}), {});
	return !!Component ? (
		<div id={block.slug} key={block.slug}>
			<Component { ...enhancedBlockProps }  />
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
