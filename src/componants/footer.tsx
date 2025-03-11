import type { FC } from "hono/jsx";
import type { ExternalLink } from "../sql/external_link_data";
import { getDomainExternalLinks } from "../sql/external_link_data";

export type FooterProps = {
    db: D1Database,
    domain: string
}

const ExternalLinkCard: FC<{ external_link: ExternalLink }> = ({ external_link }) => {
    const {link_platform_name, link_href, link_icon_code} = external_link
    return (
        <li>
            <a href={link_href}>
                <i class={link_icon_code}></i>
                {link_platform_name}
            </a>
        </li>
    )
}

export const Footer: FC<{props: FooterProps}> = async ({props}) => {
    try{
        const {db, domain} = props
        const external_links = await getDomainExternalLinks(db, domain)
        return (
            <footer>
                {external_links.map((external_link) => (
                    <ul>
                        <ExternalLinkCard external_link={external_link} />
                    </ul>
                ))}
                &copy; Copyright {(new Date()).getFullYear()}, Entropy Is Software Development. All rights reserved.
            </footer>
        );
    } catch (e) {
        return ( <footer> {e.message} </footer> )
    }
}