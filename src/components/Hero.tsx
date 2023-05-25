import Typography from '@mui/material/Typography/Typography';
import { Hero as ECHero } from '@pagopa/pagopa-editorial-components/';
import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { BackgroundImage } from './BackgroundImage';
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
				<Typography variant="body1" color="primary.contrastText">
					<Html data={subtitle} />
				</Typography>
			}
			background={
				<BackgroundImage image={getImage(background)} alt={altText} />
			}
		/>
	);
};
