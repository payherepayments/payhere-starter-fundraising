const urljoin = require("url-join")
const siteConfig = require("./siteConfig")

module.exports = {
  siteMetadata: {
    title: siteConfig.name,
    author: siteConfig.author,
    description: siteConfig.description,
    siteUrl: urljoin(siteConfig.url, siteConfig.prefix),
    social: {
      twitter: siteConfig.twitter,
    },
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("postcss-import"),
          require("tailwindcss"),
          require("postcss-nested"),
          require("autoprefixer"),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: ["/ignored.css"], // Ignore files/folders
        purgeOnly: ["components/", "/main.css"], // Purge only these files/folders
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.name,
        short_name: siteConfig.shortName,
        start_url: siteConfig.prefix,
        background_color: `#ffffff`,
        theme_color: `#004DC9`,
        display: `minimal-ui`,
        icon: `src/images/icon-512.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'payhere-modal',
        id: 'payhere-modal',
      },
    }
  ]
}
