import React, { useState } from "react"

import HomePage from "./HomePage/HomePage"
import LoginPage from "./Login"

const App = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [hasLoginError, setHasLoginError] = useState(false)

  function login(passwordInput) {
    const appPassword = "appPassword" // To be changed for environment variable
    setIsConnected(passwordInput === appPassword)
    setHasLoginError(passwordInput !== appPassword)
  }

  return isConnected ? (
    <HomePage />
  ) : (
    <LoginPage
      login={passwordInput => login(passwordInput)}
      hasLoginError={hasLoginError}
    />
  )
}

export default App
