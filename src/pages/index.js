import React from "react"
import Layout from "../components/templates/Layout"
import SEO from "../components/seo"
import MainPage from "../components/templates/MainPage"

const PageIndex = ({ location }) => (
  <Layout location={location}>
    <SEO title="Strona główna" />
    <MainPage />
  </Layout>
)

export default PageIndex
