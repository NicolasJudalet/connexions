import React, { useState } from "react"

import HomePage from "../components/pageComponents/HomePage"
import LoginPage from "../components/pageComponents/Login"

const App = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [hasLoginError, setHasLoginError] = useState(false)

  function login(passwordInput) {
    setIsConnected(passwordInput === process.env.GATSBY_APP_PASSWORD)
    setHasLoginError(passwordInput !== process.env.GATSBY_APP_PASSWORD)
  }

  function logout() {
    setIsConnected(false)
  }

  return isConnected ? (
    <HomePage logout={() => logout()} />
  ) : (
    <LoginPage
      login={passwordInput => login(passwordInput)}
      hasLoginError={hasLoginError}
    />
  )
}

export default App
