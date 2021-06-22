module.exports = (pluginConfig = {}) => (nextConfig = {}) => {
  return Object.assign(
    nextConfig,
    {
      webpack(config, options) {
      pluginConfig.module.rules.push({
        test: config.loaderTest || /\.graphql$/,
        exclude: /node_modules/,
        use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
      })
  
      pluginConfig.module.rules.push({
        test: config.schemaLoaderTest || /\.graphqls$/,
        exclude: /node_modules/,
        use: ['graphql-let/schema/loader'],
      })
  
      return config
    }
  })
}
