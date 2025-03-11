-- Migration number: 0002 	 2025-02-27T08:28:08.137Z

INSERT INTO sites(protocol, sub_domain, domain_name, top_level_domain)
VALUES
      ('https', NULL, 'entropyis', 'me')
    , ('https', NULL, 'entropyis', 'com')
;

INSERT INTO external_links(platform_name, domain_name, href, tag_prefix, tag_string, icon_code)
VALUES
      ('YouTube', 'entropyis', 'https://www.youtube.com/@entropy-is', '@', 'entropy-is', 'fa-brands fa-youtube')
    , ('x.com', 'entropyis', 'https://x.com/entropyis_me', '@', 'entropyis_me', 'fa-brands fa-x-twitter')
    , ('GitHub', 'entropyis', 'https://github.com/EntropyIs', NULL, NULL, 'fa-brands fa-github')
    , ('Steam', 'entropyis', 'https://store.steampowered.com/dev/EntropyIs', NULL, NULL, 'fa-brands fa-steam')
    , ('itch.io', 'entropyis', 'https://entropyis.itch.io', NULL, NULL, 'fa-brands fa-itch-io')
    , ('Discord', 'entropyis', 'http://discord.gg/78XV5azaDw', NULL, NULL, 'fa-brands fa-discord')
;

INSERT INTO external_tags(platform_name, domain_name, tag_prefix, tag_string)
VALUES
      ('YouTube', 'entropyis', '@', 'entropy-is')
    , ('x.com', 'entropyis', '@', 'entropyis_me')
    , ('x.com', 'entropyis', '#', 'entropyis')
    , ('x.com', 'entropyis', '#', 'escapethekreegan')
;