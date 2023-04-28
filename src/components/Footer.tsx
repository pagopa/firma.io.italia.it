import Pagopa from '@pagopa/pagopa-editorial-components/';
import {
	CompanyLinkType,
	PreLoginFooterLinksType,
} from '@pagopa/pagopa-editorial-components/dist/components/Footer';
import { LangSwitchProps } from '@pagopa/pagopa-editorial-components/dist/components/Footer/LangSwitch';
import React from 'react';
import { Html } from './Html';

type FooterProps = LangSwitchProps & {
	companyLink: CompanyLinkType;
	legalInfo: JSX.Element | JSX.Element[];
	links: PreLoginFooterLinksType;
	onExit?: (exitAction: () => void) => void;
	productsJsonUrl?: string;
	onProductsJsonFetchError?: (reason: any) => void;
	hideProductsColumn?: boolean;
};

export const Footer = ({ legalInfo, ...props }: FooterProps) => (
	<Pagopa.Footer
		{...props}
		legalInfo={
			typeof legalInfo === 'string' ? <Html data={legalInfo} /> : legalInfo
		}
	/>
);
