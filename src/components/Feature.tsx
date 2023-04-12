import Pagopa from '@pagopa/pagopa-editorial-components/';
import { FeatureProps } from '@pagopa/pagopa-editorial-components/dist/components/Feature/Feature';
import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const Feature = (props: FeatureProps) => (
	<Pagopa.Feature
		{...props}
		items={props.items.map((item) => ({ ...item, icon: <AccountBoxIcon /> }))}
	/>
);
