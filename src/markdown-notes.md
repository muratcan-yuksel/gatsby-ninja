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
-------------
Image optimization
-download gatsby-image plugin as well as 2 other plugins that's referred in gatsby-image plugin page
-create images folder in src
-add images into that folder
-go to gatsby config.js and add the two plugins as well as another object like this:
  {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    -in graphiql: file/relativePath/ eq(qeuals) banner.png
    looks like this in the console:
    query MyQuery{
        file(relativePath: (eq: "banner.png))
    }
    -find the plugins childimagesharp etc. an instance:
    query MyQuery {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid(sizes: "") {
        src
        srcSet
      }
    }
  }
}
