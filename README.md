# netlify-plugin-graphcms-validator

> A Netlify plugin to validate GraphQL queries performed on GraphCMS.

## Why?

I need a plugin for my Gatsby + GraphCMS Blog Starter check it out [here](https://github.com/hawyar/gatsby-graphcms-starter). The idea is to make sure all the graphql queries are valid and the data is actually being pulled in before Netlify pushed a production build.

## How?

Thankfully, Netlify allows us to trigger actions at different events of the build cycle using [Netlify Build Plugins](https://docs.netlify.com/configure-builds/build-plugins/).

To be honest I am not sure how this will work so here we are - bear with me. For now, this is experimental.
