import React from "react"

import Style from "./TripTimeline.style"
import avatar from "../../../../assets/avatar.png"

const TripTimeline = () => {
  const elapsedPercentage = 32

  return (
    <Style.Wrapper>
      <Style.Icon>🛫</Style.Icon>
      <Style.Line>
        <Style.Avatar elapsedPercentage={elapsedPercentage}>
          <Style.Image src={avatar} alt="Nico et Laeti" />
        </Style.Avatar>
      </Style.Line>
      <Style.Icon>🛬</Style.Icon>
    </Style.Wrapper>
  )
}

export default TripTimeline
