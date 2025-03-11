export type ExternalLink = {
    platform_name: string;
    href: string;
    icon_code: string;
}

export const getDomainExternalLinks = async (db: D1Database, domain: string) => {
    const query = `
        SELECT
              platform_name
            , href
            , icon_code
        FROM external_links
        WHERE domain_name = ?
    `;

    const { results } = await db
        .prepare(query)
        .bind(domain)
        .all<ExternalLink>();
    const external_links = results
    return external_links
}