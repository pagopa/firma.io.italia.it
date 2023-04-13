import Pagopa from '@pagopa/pagopa-editorial-components/';
import { HowToProps } from '@pagopa/pagopa-editorial-components/dist/components/HowTo';
import React from 'react';

const Icons = [
	<img src="./Send.svg" />,
	<img src="./DeviceDoc.svg" />,
	<img src="./Firma.svg" />,
	<img src="./Leggi.svg" />,
];

export const HowTo = (props: HowToProps) => (
	<Pagopa.HowTo
		{...props}
		steps={props.steps.map((step, i) => ({ ...step, icon: Icons[i] }))}
	/>
);
