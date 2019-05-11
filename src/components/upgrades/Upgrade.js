import React from "react"
import PropTypes from "prop-types"
import Progress from "react-progressbar"

import Chip from "../Chip"
import Button from "../Button"
import { Animated } from "react-animated-css"
import Loading from "../Loading"

// @todo do this the React way with state
// @todo split these into small componenets
// @todo insert Amazon store ref link in complete message
// @todo Run again without refresh
// @todo insert Google Ads
// @todo insert Google Analytics

let currentProgress = 0

const selectUpgrade = event => {
  const button = event.target
  const selected = button.parentElement.parentElement
  const upgradesContainer = document.querySelector(".upgrades")
  const upgrades = upgradesContainer.querySelectorAll("li")
  const progressBarContainer = selected.querySelector(".progressbar-container")
  progressBarContainer.style.display = "none"
  const progressBar = progressBarContainer.querySelector(
    ".progressbar-progress"
  )

  const heading = document.querySelector(".container h1")
  heading.classList.add("animated", "fadeOut")

  const description = document.querySelector(".container > p")
  description.classList.add("animated", "fadeOut")

  setTimeout(() => {
    heading.style.display = "none"
    description.style.display = "none"
  }, 500)

  upgrades.forEach(upgrade => {
    if (upgrade !== selected) {
      upgrade.className = ""
      upgrade.classList.add("animated", "rollOut")
    }
  })

  upgradesContainer.classList.add("selected")
  selected.classList.add("selected", "slideDown")
  button.style.display = "none"
  progressBarContainer.style.display = "block"
  const chip = selected.querySelector(".chip")
  chip.style.display = "none"

  const loading = selected.querySelector(".loading-container")
  const loadingMessage = loading.querySelector("span")
  loading.style.display = "block"
  const loadingMessages = [
    "Testing compatibility",
    "Warming up the RAM",
    "Lining up the slots",
    "Clocking the RAM",
    "Chilising in the new specs",
    "Setting new benchmarks",
    "Running stress test",
    "Upgrade ready, starting...",
  ]

  const start = () => {
    const bolt = document.querySelector(".bolt")
    bolt.classList.add("spinning")
    chip.style.display = "block"
    chip.classList.add("spinning")
    loading.style.display = "none"

    const timer = setInterval(() => {
      if (currentProgress < 100) {
        currentProgress += 5
        progressBar.style.width = `${currentProgress}%`
      } else {
        chip.classList.remove("spinning")
        chip.classList.add("animated", "lightSpeedOut")
        bolt.classList.remove("spinning")
        progressBarContainer.style.display = "none"
        currentProgress = 0
        setTimeout(() => {
          chip.style.display = "none"
          selected.querySelector(".complete").style.display = "block"
          clearInterval(timer)
        }, 500)
      }
    }, 200)
  }

  let loops = 0
  const injectMessage = setInterval(() => {
    if (loops < loadingMessages.length) {
      loadingMessage.textContent = loadingMessages[loops]
      loops++
    } else {
      start()
      clearInterval(injectMessage)
    }
  }, 1000)
}

const tryAgain = () => {
  //eslint-disable-next-line
  location.reload()
}

const Upgrade = ({ title, description }) => (
  <Animated animationIn="bounceInUp">
    <div className="loading-container">
      <Loading color="#fff" type="cylon" width="50px" height="100%" />
      <span />
    </div>
    <div className="complete">
      <h2>Upgrade successfully completed!</h2>
      <p>
        Your RAM upgrade was successfull, you can now have at least 5 Chrome
        tabs open at the same time!
      </p>
      <p>
        <small>
          (this won't actually upgrade your RAM, you need to buy some to do
          that)
        </small>
      </p>
      <button className="try-again button" onClick={tryAgain}>
        Try Again?
      </button>
    </div>
    <Chip alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <Button text="Choose Upgrade" onClick={selectUpgrade} />
    <Progress completed={currentProgress} />
  </Animated>
)

Upgrade.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

Upgrade.defaultProps = {
  title: ``,
  description: ``,
}

export default Upgrade
