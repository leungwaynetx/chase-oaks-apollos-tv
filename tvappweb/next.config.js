const path = require('path');

const withTM = require('next-transpile-modules')([
  'react-native',
  'styled-components',
  'styled-components/native',
]);

module.exports = withTM({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        // Transform all direct `react-native` imports to `react-native-web`
        'react-native$': 'react-native-web',
      },
      modules: [
        ...config.resolve.modules,
        path.resolve(__dirname, 'node_modules'),
      ],
      symlinks: true,
    };
    config.module.rules.push({
      test: /\.+(js)|(jsx)$/,
      use: defaultLoaders.babel,
      include: [path.resolve(__dirname, '..', 'shared')],
    });

    return config;
  },
});
