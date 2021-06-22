module.exports = (pluginConfig = {}) => (nextConfig = {}) => {
  return Object.assign(
    {},
    nextConfig,
    {
      webpack(config, options) {
      const webpackConfig = nextConfig.webpack?.(config, options) || config
      const rules = webpackConfig.module?.rules
      
      if (!rules) {
        throw new Error(
          'Next Plugin graphql-let could not find webpack rules. Please file an issue.'
        )
      }

      rules.push({
      test: pluginConfig.loaderTest || /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
      })

      rules.push({
        test: pluginConfig.schemaLoaderTest || /\.graphqls$/,
        exclude: /node_modules/,
        use: ['graphql-let/schema/loader'],
      })
  
      return config
    }
  })
}
