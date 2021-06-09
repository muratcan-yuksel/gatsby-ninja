for adding blog posts, using md (markdown) files are quite handy.
to do that: check out the gatsby.config.js and what did we added into the plugins:
   {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
in order for that plugin to work, we must downloaad it via npm (you can find it on gatsby's plugins webpage)- it's gatsby-source-filesystem
then we're gonna query it
- to query and transform it, we need another plugin: gatsby-transformer-remark
-then we need to register it in gastby config:
it doesn't need to be an object, so we can just write this in plugins:  `gatsby-transformer-remark`,
now we have markdownremark choices in graphiql console
(they're found under allmarkdownremark/nodes)