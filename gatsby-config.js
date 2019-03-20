module.exports = {
  siteMetadata: {
    title: `Andre Parsons - Web Developer`,
    description: `Andre Parsons is a web developer who's always learning new things. Learn about him and his projects here.`,
    author: `Andre Parsons`,
    menuLinks: [
      {
        name: "Andre Parsons",
        linkName: "About",
        link: "/"
      },
      {
        name: "Coding Projects",
        linkName: "Coding",
        link: "/coding"
      },
      {
        name: "Photography",
        linkName: "Photography",
        link: "/photos"
      },
      {
        name: "My Thoughts",
        linkName: "Blog",
        link: "/blog"
      },
      {
        name: "Contact Me",
        linkName: "Contact",
        link: "/contact"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andre Parsons - Web Developer`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#292929`,
        theme_color: `#292929`,
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
