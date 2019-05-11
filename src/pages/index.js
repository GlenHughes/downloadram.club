import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
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
        Computer running slow? Need a quick{" "}
        <strong>FREE boost to your PC's performance</strong>? Choose from one of
        the RAM upgrade options below to start your{" "}
        <strong>RAM download</strong>!
      </p>
      <Upgrades />
    </div>
  </Layout>
)

export default IndexPage
