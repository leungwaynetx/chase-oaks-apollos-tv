# apollos-tv

`yarn dev` to start web and React Native app.

### Linting

Since the `shared`, `tvappweb`, and `tvappnative` packages share so much in common with their tech stack, the `eslint` and `prettier` configurations were lifted to the workspace root. This removes the many redundant devDependencies across the packages, and should make long term maintenance simpler since there is one, common configuration.

The base eslint config is [@apollosproject/apollos-eslint-config](https://github.com/ApollosProject/apollos-apps/tree/master/packages/apollos-eslint-config).

Each package has a `yarn lint` script to validate linting within the package scope.