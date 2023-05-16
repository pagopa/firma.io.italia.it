import React, { useRef } from 'react';
import './Html.css';

export const Html = ({ data }: { data: TrustedHTML }) => (
	<span
		dangerouslySetInnerHTML={{
			__html: data,
		}}
	/>
);
