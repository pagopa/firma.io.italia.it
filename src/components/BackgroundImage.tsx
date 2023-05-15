import React from 'react';
import { GatsbyImage, GatsbyImageProps } from 'gatsby-plugin-image';
import { Box, BoxProps, useTheme } from '@mui/material';

type BackgroundImageProps = GatsbyImageProps & {
	overlayProps?: BoxProps;
};

export const BackgroundImage = ({
	overlayProps,
	...imageProps
}: BackgroundImageProps) => {
	return (
		<Box
			sx={{
				position: 'absolute',
				width: '100%',
				height: '100%',
				left: 0,
			}}
		>
			<Box
				{...overlayProps}
				sx={{
					backgroundColor: 'primary.dark',
					position: 'absolute',
					width: '100%',
					height: '100%',
					opacity: 0.65,
					zIndex: -2,
				}}
			/>
			<GatsbyImage {...imageProps} style={{ zIndex: -3, height: '100%' }} />
		</Box>
	);
};
