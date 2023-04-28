import React, { MutableRefObject } from 'react';
import './Html.css';

export const Html = ({
	data,
	forwardRef,
}: {
	data: string;
	forwardRef?: MutableRefObject<any>;
}) => (
	<span
		ref={forwardRef}
		dangerouslySetInnerHTML={{
			__html: data,
		}}
	/>
);
