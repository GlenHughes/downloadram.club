import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Upgrades from "../components/upgrades/Upgrades"

const IndexPage = data => (
  <Layout>
    <SEO title="Home" keywords={[`download`, `ram`, `free`, `upgrade`, `PC`]} />
    <div
      className="container"
      style={{
        textAlign: `center`,
        margin: `5rem auto 0`,
        width: `80%`,
      }}
    >
      <h1>Download More RAM!</h1>
      <p>
        Computer running slow? Need a quick
        <strong>FREE boost to performance</strong>? Choose an upgrade option
        below to which sutis your needs.
      </p>
      <Upgrades />
    </div>
  </Layout>
)

export default IndexPage
