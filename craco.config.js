const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { "@primary-color": "#C4C4C4" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
