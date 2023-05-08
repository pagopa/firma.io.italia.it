import { Hero as ECHero } from '@pagopa/pagopa-editorial-components/';
import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Html } from './Html';

export const Hero = ({
	background,
	altText = '',
	subtitle,
	...props
}: HeroProps) => {
	return (
		<ECHero
			{...props}
			subtitle={
				typeof subtitle === 'string' ? <Html data={subtitle} /> : subtitle
			}
			background={
				<div
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						left: 0,
					}}
				>
					<div
						style={{
							backgroundColor: 'rgba(0, 98, 195)',
							position: 'absolute',
							width: '100%',
							height: '100%',
							opacity: 0.65,
							zIndex: -2,
						}}
					/>
					<GatsbyImage
						image={getImage(background)}
						alt={altText}
						style={{
							zIndex: -3,
							height: '100%',
						}}
					/>
				</div>
			}
		/>
	);
};
