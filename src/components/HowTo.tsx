import { HowTo as ECHowTo } from '@pagopa/pagopa-editorial-components/';
import { HowToProps } from '@pagopa/pagopa-editorial-components/dist/components/HowTo';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Icons = [
	<StaticImage src="../assets/Send.svg" alt="send" />,
	<StaticImage src="../assets/DeviceDoc.svg" alt="device" />,
	<StaticImage src="../assets/Firma.svg" alt="firma" />,
	<StaticImage src="../assets/Leggi.svg" alt="leggi" />,
];

export const HowTo = (props: HowToProps) => (
	<ECHowTo
		{...props}
		steps={props.steps.map((step, i) => ({ ...step, icon: Icons[i] }))}
	/>
);
