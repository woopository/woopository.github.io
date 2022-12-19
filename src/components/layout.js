import * as React from "react"
import { Link } from "gatsby"
import ThemeToggle from "../components/ThemeToggle"

const Layout = ({ title, children }) => {
  return (
    <div className="global-wrapper">
      <header className="global-header">
        <h1 className="main-heading h2">
          <Link to="/">{title}</Link>
        </h1>
        <ThemeToggle />
      </header>
      <div className="global-content">
        <main>{children}</main>        
      </div>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
