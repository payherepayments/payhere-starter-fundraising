import "circular-std"
import "../styles/main.css"
import React from "react"
import Img from "gatsby-image"

const Layout = ({ title, mainImage, children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className={`md:order-1 md:flex-1 h-64 md:h-auto flex flex-col`}>
        <Img fluid={mainImage.asset.fluid} alt={title} className="flex-1" />
      </div>
      <div className="bg-white p-6 md:p-8 w-full max-w-lg">
        {children}
      </div>
    </div>
  )
}

export default Layout
