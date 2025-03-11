-- Migration number: 0001 	 2025-02-27T08:27:21.492Z


--DELETE FROM d1_migrations;
--SELECT * FROM d1_migrations;

--DROP TABLE IF EXISTS external_tags;
--DROP TABLE IF EXISTS external_links;
--DROP TABLE IF EXISTS sites;

CREATE TABLE IF NOT EXISTS sites (
      protocol TEXT NOT NULL
    , sub_domain TEXT
    , domain_name TEXT NOT NULL
    , top_level_domain TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS external_links (
      platform_name TEXT NOT NULL
    , domain_name TEXT NOT NULL
    , href TEXT
    , tag_prefix TEXT
    , tag_string TEXT
    , icon_code TEXT
    , PRIMARY KEY (platform_name, domain_name)
);

CREATE TABLE IF NOT EXISTS external_tags (
      platform_name TEXT NOT NULL
    , domain_name TEXT NOT NULL
    , tag_prefix TEXT NOT NULL
    , tag_string TEXT NOT NULL
    , PRIMARY KEY (platform_name, domain_name, tag_prefix, tag_string)
);