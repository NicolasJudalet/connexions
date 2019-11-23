import React from "react"
import { navigate } from "@reach/router"

import { isLoggedIn } from "utils/auth.js"
import LoginPage from "../components/pageComponents/Login"

const App = () => {
  return isLoggedIn() ? navigate("/home") : <LoginPage />
}

export default App
