const dotenv = require("dotenv")

const setupEnvVariables = () => {
  dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
  })
}

setupEnvVariables()

const {
  env: { GATSBY_PUBLIC_KEY, GATSBY_PRIVATE_KEY }
} = process

module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-marvel",
      options: {
        publicKey: GATSBY_PUBLIC_KEY,
        privateKey: GATSBY_PRIVATE_KEY,
        queries: [
          {
            entity: "characters",
            entityFilters: {
              name: "Iron Man",
            }
          }
        ]
      }
    }
  ],
}
