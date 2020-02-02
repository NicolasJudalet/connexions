/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: ".env",
})

const { spaceId, accessToken } = process.env

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "assets/america-icon.png",
        start_url: "/",
      },
    },
    "gatsby-plugin-resolve-src",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
  ],
}
