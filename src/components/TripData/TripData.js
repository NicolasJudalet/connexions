import React from "react"

import Style from "./TripData.style"
import DaysCounter from "./DaysCounter"
import TripTimeline from "./TripTimeline"

const TripData = () => (
  <Style.Wrapper>
    <DaysCounter />
    <TripTimeline />
    <div>PolarStepLink</div>
  </Style.Wrapper>
)

export default TripData
