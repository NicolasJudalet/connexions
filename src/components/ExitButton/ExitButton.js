import React from "react"

import Style from "./ExitButton.style"

export default ({ logout }) => (
  <Style.ExitButton onClick={() => logout()}>Exit</Style.ExitButton>
)
