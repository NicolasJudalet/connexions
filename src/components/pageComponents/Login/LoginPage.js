import React, { useState } from "react"
import { navigate } from "@reach/router"

import { handleLogin, isLoggedIn } from "utils/auth.js"

import Header from "components/Header"
import Styles from "./LoginPage.style"

const LoginPage = () => {
  const isConnected = isLoggedIn()
  if (isConnected) {
    navigate(`/home`)
  }

  const [passwordInput, setPasswordInput] = useState("")
  const [hasLoginError, setHasLoginError] = useState("")

  function handlePasswordChange(e) {
    setPasswordInput(e.target.value)
  }

  return (
    <>
      <Header isConnected={isConnected} />
      <Styles.Wrapper>
        <Styles.Label>
          <Styles.Title>
            <em>Mot de passe</em>
          </Styles.Title>
          {hasLoginError && (
            <Styles.ErrorMessage>
              <span>Mot de passe incorrect</span>
              <span>Veuillez réessayer</span>
            </Styles.ErrorMessage>
          )}
          <Styles.Input
            type="password"
            value={passwordInput}
            onChange={handlePasswordChange}
          />
          <Styles.Button
            onClick={() =>
              handleLogin(passwordInput)
                ? navigate("/home")
                : setHasLoginError(true)
            }
          >
            Check In
          </Styles.Button>
        </Styles.Label>
      </Styles.Wrapper>
    </>
  )
}

export default LoginPage
