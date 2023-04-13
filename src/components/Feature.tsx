import Pagopa from '@pagopa/pagopa-editorial-components/';
import { FeatureProps } from '@pagopa/pagopa-editorial-components/dist/components/Feature/Feature';
import React from 'react';

const Icons = [
	<img src="./Easy.svg" />,
	<img src="./Data Security.svg" />,
	<img src="./PiggyBank.svg" />,
	<img src="./Sustainable.svg" />,
];

export const Feature = (props: FeatureProps) => (
	<Pagopa.Feature
		{...props}
		items={props.items.map((item, i) => ({ ...item, icon: Icons[i] }))}
	/>
);
