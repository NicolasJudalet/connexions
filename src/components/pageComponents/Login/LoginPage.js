import React, { useState } from "react"
import Header from "components/Header"
import Styles from "./LoginPage.style"

const LoginPage = ({ login, hasLoginError }) => {
  const [passwordInput, setPasswordInput] = useState("")

  function handlePasswordChange(e) {
    setPasswordInput(e.target.value)
  }

  return (
    <>
      <Header isConnected={false} />
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
          <Styles.Button onClick={() => login(passwordInput)}>
            Check In
          </Styles.Button>
        </Styles.Label>
      </Styles.Wrapper>
    </>
  )
}

export default LoginPage
