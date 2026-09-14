# Verification scope

`status.json` distinguishes publication, mirror distribution and independently observed indexing.

- `published`: confirmed canonical package publication.
- `distribution-url`: URL derived from the npm package/version through the CDN's documented npm distribution scheme; it is not recorded as an independent package index.
- `indexed-stale`: an independent third-party package page was observed, but its displayed version lagged behind npm when checked.

This distinction prevents CDN availability, directory submission and third-party indexing from being reported as the same thing.
