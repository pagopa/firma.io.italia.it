import React from 'react';
import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero';
import Pagopa from '@pagopa/pagopa-editorial-components/';
import { Html } from './Html';

export const Hero = ({ subtitle, ...props }: HeroProps) => {
	return (
		<Pagopa.Hero
			{...props}
      	subtitle={typeof subtitle === 'string' ? <Html data={subtitle} /> : subtitle}
		/>
	);
};
