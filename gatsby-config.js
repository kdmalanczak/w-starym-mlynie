const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  siteMetadata: {
    title: `W Starym Młynie`,
    author: {
      name: `Emil Małańczak`,
    },
    description: `Restauracja i Pensjonat „W Starym Młynie” to miejsce niezwykłe, pełne elegancji i pasji widoczne w każdym kącie tego uroczego obiektu.`,
    siteUrl: `http://www.stary-mlyn.com.pl`,
    keywords: [
      "restauracja",
      "pensjonat",
      "hotel",
      "restauracja milicz",
      "milicz",
      "ryby",
      "młyn",
      "stary młyn",
      "w starym młynie",
      "nocleg milicz",
    ],
    googleApi: process.env.GOOGLE_MAPS_KEY,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `./src/images/` },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    "@contentful/gatsby-transformer-contentful-richtext",
  ],
}
