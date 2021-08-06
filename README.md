# apollos-tv

A Mono-repo with React Native, Next.js, and a shared component library to build cross-platform TV apps.

### Get started

#### Install:

```
yarn

cd tvappnative/ && yarn pods
```

Update the `env.sample` and `env.local.sample` in `tvappnative` and `tvappweb` apps.

#### Run:

```
yarn dev
``` 
This starts the Next.js web (tvappweb) and React Native (tvappnative) client apps.
 _Don't forget to start your server._

### Linting

Since the `shared`, `tvappweb`, and `tvappnative` packages share so much in common with their tech stack, the `eslint` and `prettier` configurations were lifted to the workspace root. This removes the many redundant devDependencies across the packages, and should make long term maintenance simpler since there is one, common configuration.

The base eslint config is [@apollosproject/apollos-eslint-config](https://github.com/ApollosProject/apollos-apps/tree/master/packages/apollos-eslint-config).

Each package has a `yarn lint` script to validate linting within the package scope.
