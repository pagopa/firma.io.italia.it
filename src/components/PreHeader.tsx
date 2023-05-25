import HelpOutline from '@mui/icons-material/HelpOutline';
import {
	CtaButtonProps,
	CtaProps,
} from '@pagopa/pagopa-editorial-components/dist/components/Ctas';
import {
	PreHeader as ECPreHeader,
	PreHeaderProps,
} from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';
import React from 'react';

const Icons = {
	assistenza: <HelpOutline />,
};

const mapToIcons = (cta: CtaButtonProps) => ({
	...cta,
	endIcon: typeof cta?.endIcon === 'string' ? Icons[cta.endIcon] : cta?.endIcon,
	startIcon:
		typeof cta?.startIcon === 'string' ? Icons[cta.startIcon] : cta?.startIcon,
});

const enhanceProps = (ctas: CtaProps) => {
	return { ...ctas, ctaButtons: ctas.ctaButtons.map(mapToIcons) };
};

export const PreHeader = ({ leftCtas, rightCtas }: PreHeaderProps) => {
	const leftCtasEnhanced = enhanceProps(leftCtas);
	const rightCtasEnhanced = enhanceProps(rightCtas);

	return (
		<ECPreHeader leftCtas={leftCtasEnhanced} rightCtas={rightCtasEnhanced} />
	);
};
