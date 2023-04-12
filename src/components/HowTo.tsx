import Pagopa from '@pagopa/pagopa-editorial-components/';
import { HowToProps } from '@pagopa/pagopa-editorial-components/dist/components/HowTo';
import React from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const icon = <AccountBalanceIcon fontSize="large" />;

export const HowTo = (props: HowToProps) => (
	<Pagopa.HowTo
		{...props}
		steps={props.steps.map((step) => ({ ...step, icon }))}
	/>
);
