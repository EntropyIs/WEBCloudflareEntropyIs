type Site = {
    protocol: String;
    sub_domain: String;
    domain_name: String;
    top_level_domain: String;
}

export const getAllSites = async (db: D1Database) => {
    const query = `
        SELECT
              protocol,
            , sub_domain
            , domain_name
            , top_level_domain
        FROM sites
    `;

    const { results } = await db
        .prepare(query)
        .all<Site>();
    const sites = results
    return sites
}

export const getDomainSites = async (db: D1Database, domain: String) => {
    const query = `
        SELECT
              protocol,
            , sub_domain
            , domain_name
            , top_level_domain
        FROM sites
        WHERE domain_name = ?
    `;

    const { results } = await db
        .prepare(query)
        .bind(domain)
        .all<Site>();
    const sites = results
    return sites
}

export const addSite = async (db: D1Database, site: Site) => {
    const query = `
        INSERT INTO sites(protocol, sub_domain, domain_name, top_level_domain)
        VALUES (?, ?, ?, ?)
    `;

    const { results } = await db
        .prepare(query)
        .bind(
            site.protocol,
            site.sub_domain,
            site.domain_name,
            site.top_level_domain,
        )
        .run();
    const sites = results
    return sites
}