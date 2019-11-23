import React from "react"

import HomeButton from "components/HomeButton"
import ExitButton from "components/ExitButton"

import whiteLogo from "../../../assets/app-logo-white.png"
import blackLogo from "../../../assets/app-logo-black.png"
import Style from "./Header.style"

export default ({ isConnected, logout }) => (
  <Style.Wrapper isConnected={isConnected}>
    {isConnected && <HomeButton />}
    <Style.Link to="/">
      <Style.Logo
        src={isConnected ? whiteLogo : blackLogo}
        alt="Connexions App Logo"
      />
      <Style.SiteTitle isConnected={isConnected}>Connexions</Style.SiteTitle>
    </Style.Link>
    {isConnected && <ExitButton logout={() => logout()} />}
  </Style.Wrapper>
)
