import React from 'react';
import { AccordionProps } from '@pagopa/pagopa-editorial-components/dist/components/Accordion';
import Pagopa from '@pagopa/pagopa-editorial-components/';
import { Html } from './Html';

const Accordion = ({ accordionItems, ...props }: AccordionProps) => {
  const enhancedAccordionItems = accordionItems
    .map(({ content, header  }) => ({ header, content: typeof content === 'string' ? <Html data={content} /> : content})) 
	return (
		<Pagopa.Accordion
			{...props}
			accordionItems={enhancedAccordionItems}
		/>
	);
};

export default Accordion;
