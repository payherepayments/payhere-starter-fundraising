import "circular-std"
import "../styles/main.css"
import React from "react"
import Img from "gatsby-image"
import Helmet from "react-helmet"

import siteConfig from "../../siteConfig"

const Layout = ({ mainImage, children }) => {
  const { name, description, author } = siteConfig
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
        title={name}
        meta={[
          {
            name: `description`,
            content: description,
          },
          {
            property: `og:title`,
            content: name,
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: author,
          },
          {
            name: `twitter:title`,
            content: name,
          },
          {
            name: `twitter:description`,
            content: description,
          },
        ]}
      />
      <div className={`md:order-1 md:flex-1 h-64 md:h-auto flex flex-col`}>
        <Img fluid={mainImage.asset.fluid} alt={name} className="flex-1" />
      </div>
      <div className="bg-white p-6 md:p-8 w-full max-w-lg">
        {children}
      </div>
    </div>
  )
}

export default Layout
