import React from 'react';
import { EditorialProps } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';
import Pagopa from '@pagopa/pagopa-editorial-components/';
import { Html } from './Html';

export const Editorial = ({ body, ...props }: EditorialProps) => {
	return (
		<Pagopa.Editorial
			{...props}
			body={typeof body === 'string' ? <Html data={body} /> : body}
		/>
	);
};
