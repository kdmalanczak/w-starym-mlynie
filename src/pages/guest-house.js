import React from "react"
import Layout from "../components/templates/Layout"
import SEO from "../components/seo"
import GuestHouse from "../components/templates/GuestHouse"

const PageIndex = ({ location }) => (
  <Layout location={location}>
    <SEO title="Pensjonat" />
    <GuestHouse />
  </Layout>
)

export default PageIndex
