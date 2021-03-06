import React from "react"

import whiteHome from "../../../assets/home-white.png"
import Style from "./HomeButton.style"

export default () => (
  <Style.Link to="/">
    <Style.HomeLogo src={whiteHome} alt="Home" />
  </Style.Link>
)
