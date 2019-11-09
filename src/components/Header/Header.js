import React from "react"

import HomeButton from "components/HomeButton"

import whiteLogo from "../../../assets/app-logo-white.png"
import blackLogo from "../../../assets/app-logo-black.png"
import Style from "./Header.style"

export default ({ isConnected }) => (
  <nav role="Header">
    <Style.Wrapper isConnected={isConnected}>
      {isConnected && <HomeButton />}
      <Style.Link to="/">
        <Style.Logo
          src={isConnected ? whiteLogo : blackLogo}
          alt="Connexions App Logo"
        />
        <Style.SiteTitle isConnected={isConnected}>Connexions</Style.SiteTitle>
      </Style.Link>
    </Style.Wrapper>
  </nav>
)
