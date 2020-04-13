import React from "react"

import Style from "./DaysCounter.style"

const DaysCounter = ({ daysElapsed, tripTotalDuration }) => (
  <Style.Wrapper>
    {daysElapsed === tripTotalDuration ? (
      <Style.Text>Voyage terminé</Style.Text>
    ) : daysElapsed > 0 ? (
      <Style.Text>En voyage depuis...</Style.Text>
    ) : daysElapsed < 0 ? (
      <Style.Text>Départ dans ...</Style.Text>
    ) : (
      <Style.Text>Départ</Style.Text>
    )}
    {daysElapsed !== 0 ? (
      <Style.CounterText>{Math.abs(daysElapsed)} jours</Style.CounterText>
    ) : (
      <Style.CounterText>aujourd'hui !</Style.CounterText>
    )}
  </Style.Wrapper>
)

export default DaysCounter
