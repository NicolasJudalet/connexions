import React from "react"

import Style from "./TripTimeline.style"
import avatar from "../../../../assets/avatar.png"

const TripTimeline = ({ elapsedPercentage }) => {
  return (
    <Style.Wrapper>
      <Style.Icon>
        {" "}
        <span role="img" aria-label="take-off">
          🛫
        </span>
      </Style.Icon>
      <Style.Line>
        <Style.Avatar elapsedPercentage={elapsedPercentage}>
          <Style.Image src={avatar} alt="Nico et Laeti" />
        </Style.Avatar>
      </Style.Line>
      <Style.Icon>
        {" "}
        <span role="img" aria-label="landing">
          🛬
        </span>
      </Style.Icon>
    </Style.Wrapper>
  )
}

export default TripTimeline
