import React from "react"
import { navigate } from "@reach/router"

import { isLoggedIn } from "utils/auth"
import LoginPage from "components/pageComponents/LoginPage"

const App = () => {
  return isLoggedIn() ? navigate("/home") : <LoginPage />
}

export default App
