const path = require('path');

module.exports = {
  webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'react-native': path.join(
          __dirname,
          'node_modules',
          'react-native-web',
        ),
      },
      modules: [
        ...config.resolve.modules,
        path.resolve(__dirname, 'node_modules'),
      ],
      symlinks: false,
    };
    config.module.rules.push({
      test: /\.+(js)|(jsx)$/,
      use: defaultLoaders.babel,
      include: [path.resolve(__dirname, '..', 'src')],
    });

    return config;
  },
};
