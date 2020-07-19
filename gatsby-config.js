const dotenv = require("dotenv")

const setupEnvVariables = () => {
  dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

setupEnvVariables()

const {
  env: { GATSBY_PUBLIC_KEY, GATSBY_PRIVATE_KEY },
} = process

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-marvel",
      options: {
        publicKey: GATSBY_PUBLIC_KEY,
        privateKey: GATSBY_PRIVATE_KEY,
        limit: 1,
        queries: [
          {
            entity: "characters",
            entityFilter: {
              name: "Iron Man",
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require(`sass`),
      }
    }
  ],
}
