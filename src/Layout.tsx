import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Header } from '@pagopa/pagopa-editorial-components/';
import { Footer } from './components/Footer';
import { useLocation } from '@reach/router';
import { MenuDropdownProp } from '@pagopa/pagopa-editorial-components/dist/components/Header/components/MenuDropdown';
import { SEO } from './components/SEO';

export default function Layout({ children, seo }) {
	const {
		layoutYaml: { footer, header },
	} = useStaticQuery(graphql`
		query Layout {
			layoutYaml {
				footer {
					companyLink {
						ariaLabel
						href
					}
					currentLangCode
					languages {
						it {
							it
						}
					}
					legalInfo
					links {
						aboutUs {
							title
							links {
								ariaLabel
								href
								label
								linkType
							}
						}
						followUs {
							links {
								ariaLabel
								href
								label
								linkType
							}
							socialLinks {
								ariaLabel
								icon
								href
								title
							}
							title
						}
						resources {
							links {
								ariaLabel
								href
								label
								linkType
							}
							title
						}
					}
					productsJsonUrl
				}
				header {
					ctaButtons {
						color
						size
						href
						target
						text
						variant
					}
					menu {
						active
						label
						href
						theme
						target
					}
					product {
						name
						href
					}
					slug
					theme
				}
				id
			}
		}
	`);

	const { pathname } = useLocation();
	const menu = header.menu.map((item: MenuDropdownProp) => {
		const isCurrent =
			pathname === item.href || pathname.split('/').includes(item.href);
		return { ...item, active: isCurrent };
	});

	return (
		<>
			<SEO meta={seo} />
			{header && <Header {...header} menu={menu} />}
			<main>{children}</main>
			{footer && <Footer {...footer} />}
		</>
	);
}
