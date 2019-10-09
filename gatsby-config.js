module.exports = {
  siteMetadata: {
    title: "T.A. Geoforce - Data Analytics",
    author: "Christos Charmatzis",
    description: "T.A. Geoforce - Data Analytics"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ta-geoforce-website',
        short_name: 'TA Geoforce',
        start_url: '/',
        background: '#66000000',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/global1.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
