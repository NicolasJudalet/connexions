import React, { useState } from "react"
import { navigate } from "@reach/router"

import { handleLogin, isLoggedIn } from "utils/auth.js"

import Styles from "./LoginPage.style"
import WithHeader from "components/Layout/WithHeader"

const LoginPage = () => {
  if (isLoggedIn()) {
    navigate(`/home`)
  }

  const [passwordInput, setPasswordInput] = useState("")
  const [hasLoginError, setHasLoginError] = useState("")

  function handlePasswordChange(e) {
    setPasswordInput(e.target.value)
  }

  return (
    <WithHeader>
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
    </WithHeader>
  )
}

export default LoginPage
