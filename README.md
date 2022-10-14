# Component Library Template

## Getting Started

Just clone this repository, find `@org` and replace with any `@` you want and run `npm install`.

## Packages

- **./docs:** Storybook with a11y and jest configured.
- **./eslint-config:** eslint configuration for all packages.
- **./ts-config:** typescript configuration for all packages.
- **./react:** your components.
- **./styles:** reset and design tokens.

# Root Scripts

- `dev`: runs dev on each package.
- `build`: build all projects.
- `changeset`: run changeset without any params.
- `version-packages`: update version of each modified package.
- `release`: build all packages except for the docs, publish them on npm and create git tags.

## Additional Information

- **package.json**: private is true and no license is set.
- **[Turborepo](https://turborepo.org/):** it's recommended to setup the remote caching.
- **[Changesets](https://github.com/changesets/changesets):** easily manage package versions.
  - `access` is configured to restricted. [Read more](https://github.com/changesets/changesets/blob/main/docs/config-file-options.md)
