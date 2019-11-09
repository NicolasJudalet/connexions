import React, { useState } from "react"

import HomePage from "./HomePage/HomePage"
import LoginPage from "./Login"

const App = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [hasLoginError, setHasLoginError] = useState(false)

  function login(passwordInput) {
    const appPassword = "a" // To be changed for environment variable
    setIsConnected(passwordInput === appPassword)
    setHasLoginError(passwordInput !== appPassword)
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
