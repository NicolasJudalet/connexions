import React from "react"

import Style from "./TripData.style"
import DaysCounter from "./DaysCounter"

const TripData = () => (
  <Style.Wrapper>
    <DaysCounter />
    <div>TripTimeline</div>
    <div>PolarStepLink</div>
  </Style.Wrapper>
)

export default TripData
