import React from 'react';
import { EditorialProps } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';
import { Editorial as ECEditorial } from '@pagopa/pagopa-editorial-components/';
import { Html } from './Html';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

export const Editorial = ({
	body,
	...props
}: EditorialProps & { image: { src: IGatsbyImageData; alt: string } }) => {
	return (
		<ECEditorial
			{...props}
			body={typeof body === 'string' ? <Html data={body} /> : body}
			image={
				React.isValidElement(props.image) ? (
					props.image
				) : (
					<GatsbyImage
						image={getImage(props.image.src)}
						alt={props.image.alt}
					/>
				)
			}
		/>
	);
};
