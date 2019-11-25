import React from "react"
import { navigate } from "@reach/router"

import { logout, isLoggedIn } from "utils/auth"

import HomeButton from "components/HomeButton"
import ExitButton from "components/ExitButton"

import whiteLogo from "../../../assets/app-logo-white.png"
import blackLogo from "../../../assets/app-logo-black.png"
import Style from "./Header.style"

export default () => {
  const isConnected = isLoggedIn()
  return (
    <Style.Wrapper isConnected={isConnected}>
      {isConnected && <HomeButton />}
      <Style.Title>
        <Style.Logo
          src={isConnected ? whiteLogo : blackLogo}
          alt="Connexions App Logo"
        />
        <Style.SiteTitle isConnected={isConnected}>Connexions</Style.SiteTitle>
      </Style.Title>
      {isConnected && <ExitButton logout={() => logout(() => navigate("/"))} />}
    </Style.Wrapper>
  )
}
