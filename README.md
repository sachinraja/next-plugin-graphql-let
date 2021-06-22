# next-plugin-graphql-let

Automatically configures webpack for [graphql-let](https://github.com/piglovesyou/graphql-let) usage in Next.js.

## Installation

```sh
npm install next-plugin-graphql-let
```

## Usage

```js
// in next.config.js
const createNextPluginGraphQLLet = require("next-plugin-graphql-let")

const withNextPluginGraphQLLet = createNextPluginGraphQLLet()

module.exports = withNextPluginGraphQLLet()
// next.js configuration
```

## Example

```js
const createNextPluginGraphQLLet = require("next-plugin-graphql-let")

const withNextPluginGraphQLLet = createNextPluginGraphQLLet()

module.exports = withNextPluginGraphQLLet({
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: "json",
      use: "yaml-loader",
    })

    return config
  },
})
```

## Options

You can use `loader` to change webpack settings for the rule that uses `graphql-let/loader` (regular GraphQL files) and `schemaLoader` to change webpack settings for the rule that uses `graphql-let/schema/loader` (GraphQL schema files) on:

```js
// in next.config.js
const createNextPluginGraphQLLet = require("next-plugin-graphql-let")

// these are the default tests
const withNextPluginGraphQLLet = createNextPluginGraphQLLet({
  loader: {
    test: /\.graphql$/,
  },
  schemaLoader: {
    test: /\.graphqls$/,
  },
})

module.exports =
  withNextPluginGraphQLLet()
  // next.js configuration
```
