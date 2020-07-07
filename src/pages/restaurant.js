import React from "react"
import Layout from "../components/templates/Layout"
import SEO from "../components/seo"
import Restaurant from "../components/templates/Restaurant"

const PageIndex = ({ location }) => (
  <Layout location={location}>
    <SEO title="Restauracja" />
    <Restaurant />
  </Layout>
)

export default PageIndex
