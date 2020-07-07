import React from "react"
import Layout from "../components/templates/Layout"
import SEO from "../components/seo"
import Contact from "../components/templates/Contact"

const PageIndex = ({ location }) => (
  <Layout location={location}>
    <SEO title="Kontakt" />
    <Contact />
  </Layout>
)

export default PageIndex
