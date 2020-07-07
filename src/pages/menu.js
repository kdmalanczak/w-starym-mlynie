import React from "react"
import Layout from "../components/templates/Layout"
import SEO from "../components/seo"
import Menu from "../components/templates/Menu"

const PageIndex = ({ location }) => (
  <Layout location={location}>
    <SEO title="Nasze menu" />
    <Menu />
  </Layout>
)

export default PageIndex
