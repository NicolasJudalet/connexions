import React from "react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"

import Style from "./TripTimeline.style"
import avatar from "../../../../assets/avatar.png"

const TripTimeline = ({ elapsedPercentage, blogPostTooltipsInfo }) => {
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
        {blogPostTooltipsInfo.map(tooltipInfo => (
          <Style.BlogPostMarker
            elapsedPercentage={tooltipInfo.elapsedPercentage}
            to={tooltipInfo.slug}
          >
            <div className={"tooltiptext"}>
              <span>
                {format(new Date(tooltipInfo.eventDate), "dd MMMM", {
                  locale: fr,
                })}
              </span>
              <br />
              <span className={"blogPostTitle"}>{tooltipInfo.title}</span>
            </div>
          </Style.BlogPostMarker>
        ))}
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
