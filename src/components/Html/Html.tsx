import React, { MutableRefObject } from 'react';
import './Html.css';

export const Html = ({
	data,
	forwardRef,
}: {
	data: string;
	forwardRef?: MutableRefObject<any>;
}) => (
	<div
		ref={forwardRef}
		dangerouslySetInnerHTML={{
			__html: data,
		}}
	/>
);
