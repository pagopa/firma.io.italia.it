import Pagopa from '@pagopa/pagopa-editorial-components/';
import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

export const Hero = ({ background, altText, ...props }: HeroProps) => {
	return (
		<Pagopa.Hero
			{...props}
			background={
				<div
					className="lollo"
					style={{
						backgroundImage:
							'linear-gradient(0deg, rgba(0, 98, 195, 0.65), rgba(0, 98, 195, 0.65))',
						backgroundColor: 'rgb(0, 115, 230)',
						position: 'absolute',
						width: '100%',
						height: '100%',
						opacity: 0.5,
						left: 0,
						top: 0,
						zIndex: -1,
					}}
				>
					<GatsbyImage
						image={getImage(background)}
						alt={altText}
						style={{ zIndex: -2 }}
					/>
				</div>
			}
		/>
	);
};
