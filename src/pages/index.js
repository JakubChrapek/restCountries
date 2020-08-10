import React from "react"
import { Link } from "gatsby"

// our components
import Layout from "../components/Layout/Layout"
import Navigation from "../components/Navigation/Navigation"
import Controllers from "../components/Controllers/Controllers"

const IndexPage = () => (
  <Layout>
    <Navigation />
    <Controllers />
  </Layout>
)

export default IndexPage
