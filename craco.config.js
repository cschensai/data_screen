const CracoLessPlugin = require('craco-less');
// less 配置
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const productionEnv = env === 'production';
      webpackConfig.output.publicPath = productionEnv ? '/dataScreen/' : '/';
      return webpackConfig;
    }
  },
};
