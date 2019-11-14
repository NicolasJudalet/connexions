import React from "react"

import Style from "./DaysCounter.style"

const DaysCounter = () => {
  const daysCount = 32
  return (
    <Style.Wrapper>
      <Style.Text>En voyage depuis...</Style.Text>
      <Style.CounterText>{daysCount} jours</Style.CounterText>
    </Style.Wrapper>
  )
}

export default DaysCounter
