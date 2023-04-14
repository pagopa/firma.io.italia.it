import Pagopa from '@pagopa/pagopa-editorial-components/';
import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

export const Hero = ({ background, altText, ...props }: HeroProps) => {
	return (
		<Pagopa.Hero
			{...props}
			background={
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<GatsbyImage image={getImage(background)} alt={altText} style={{ position: 'absolute', zIndex: -1, width: '100%' }} />
				</div>
			}
		/>
	);
};
