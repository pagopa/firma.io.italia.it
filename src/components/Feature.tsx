import Pagopa from '@pagopa/pagopa-editorial-components/';
import { FeatureProps } from '@pagopa/pagopa-editorial-components/dist/components/Feature/Feature';
import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';

const Icons = [
	<StaticImage src="../assets/Easy.svg" alt="easy" />,
	<StaticImage src="../assets/Data Security.svg" alt="data security" />,
	<StaticImage src="../assets/PiggyBank.svg" alt="piggy bank" />,
	<StaticImage src="../assets/Sustainable.svg" alt="sustainable" />,
];

export const Feature = (props: FeatureProps) => (
	<Pagopa.Feature
		{...props}
		items={props.items.map((item, i) => ({ ...item, icon: Icons[i] }))}
	/>
);
