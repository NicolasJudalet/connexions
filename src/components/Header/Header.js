import React from "react"

import HomeButton from "components/HomeButton"

import whiteLogo from "../../../assets/app-logo-white.png"
import Style from "./Header.style"

export default () => {
  return (
    <Style.Wrapper>
      <HomeButton />
      <Style.Title>
        <Style.Logo src={whiteLogo} alt="Connexions App Logo" />
        <Style.SiteTitle>Connexions</Style.SiteTitle>
      </Style.Title>
    </Style.Wrapper>
  )
}
