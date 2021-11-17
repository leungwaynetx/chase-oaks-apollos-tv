const path = require('path');
const withImages = require('next-images');

const withTM = require('next-transpile-modules')([
  'react-native',
  'styled-components',
  'styled-components/native',
]);

module.exports = withImages(
  withTM({
    images: {
      domains: ['www.chaseoaks.org', 'res.cloudinary.com', 'cloudinary.com'],
      disableStaticImages: true,
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.resolve = {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          // Transform all direct `react-native` imports to `react-native-web`
          'react-native$': 'react-native-web',
        },
        // If you're working on a multi-platform React Native app, web-specific module
        // implementations should be written in files using the extension `.web.js`.
        // @see https://necolas.github.io/react-native-web/docs/multi-platform/#compiling-and-bundling
        extensions: ['.web.js', '.js'],
        modules: [
          ...config.resolve.modules,
          path.resolve(__dirname, 'node_modules'),
        ],
        symlinks: true,
      };
      config.module.rules.push({
        test: /\.js$/,
        use: defaultLoaders.babel,
        include: [path.resolve(__dirname, '..', 'shared')],
      });

      return config;
    },
  })
);
