import React from "react"
import Header from "components/Header"

import Style from "./WithHeader.style"

export default ({ children }) => (
  <>
    <Header />
    <Style.Wrapper>{children}</Style.Wrapper>
  </>
)
