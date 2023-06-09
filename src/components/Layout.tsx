import { graphql, Script, useStaticQuery } from 'gatsby';
import React from 'react';
import { Header as ECHeader } from '@pagopa/pagopa-editorial-components/';
import { Footer } from './Footer';
import { useLocation } from '@reach/router';
import { MenuDropdownProp } from '@pagopa/pagopa-editorial-components/dist/components/Header/components/MenuDropdown';
import { SEO, SEOProps } from './SEO';
import { PreHeader } from './PreHeader';
import { useTheme } from '@mui/material/styles';
import { Divider } from '@mui/material';

export const Layout = ({
	children,
	seo,
}: {
	children: React.ReactNode;
	seo?: SEOProps['meta'];
}) => {
	const {
		layoutYaml: { footer, header, preHeader },
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
				preHeader {
					leftCtas {
						theme
						ctaButtons {
							color
							href
							target
							text
							variant
						}
					}
					rightCtas {
						theme
						ctaButtons {
							color
							href
							startIcon
							target
							text
							variant
						}
					}
				}
			}
		}
	`);

	const { pathname } = useLocation();
	const { palette } = useTheme();
	const menu = header.menu.map((item: MenuDropdownProp) => {
		const isCurrent =
			pathname === item.href || pathname.split('/').includes(item.href);
		return { ...item, active: isCurrent };
	});

	return (
		<>
			{seo && <SEO meta={seo} />}
			<Script src="https://www.recaptcha.net/recaptcha/api.js" async defer/>
			{preHeader && <PreHeader {...preHeader} />}
			{preHeader && <Divider />}
			{header && <ECHeader {...header} menu={menu} />}
			<main>{children}</main>
			{footer && <Footer {...footer} />}
		</>
	);
};
