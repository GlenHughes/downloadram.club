import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Upgrade from "./Upgrade"

const Upgrades = () => {
  return (
    <StaticQuery
      query={graphql`
        query UpgradeOptionsQuery {
          allUpgradesJson {
            edges {
              node {
                id
                title
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            <ul className="flex-grid">{getUpgradeOptions(data)}</ul>
          </>
        )
      }}
    />
  )
}

function getUpgradeOptions(data) {
  const upgradeItemsArray = []
  data.allUpgradesJson.edges.forEach(upgrade => {
    upgradeItemsArray.push(
      <li key={upgrade.node.id} className="col">
        <Upgrade title={upgrade.node.title} />
      </li>
    )
  })
  return upgradeItemsArray
}

export default Upgrades
