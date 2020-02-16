import "circular-std"
import "../styles/main.css"
import React from "react"

import styles from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className={`md:order-1 md:flex-1 h-64 md:h-auto ${styles.imgContainer}`}></div>
      <div className="bg-white p-6 md:p-8 w-full max-w-lg">
        {children}
      </div>
    </div>
  )
}

export default Layout
