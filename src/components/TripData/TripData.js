import React from "react"

import { differenceInDays, startOfDay } from "date-fns"

import Style from "./TripData.style"
import DaysCounter from "./DaysCounter"
import TripTimeline from "./TripTimeline"

const getDaysElapsed = tripStartDate =>
  differenceInDays(startOfDay(new Date()), tripStartDate)

const getElapsedPercentage = (eventDate, tripStartDate, tripEndDate) =>
  Math.max(
    0,
    ((eventDate - tripStartDate) / (tripEndDate - tripStartDate)) * 100
  )

const enrichBlogPostTooltipsInfoWithPercentage = (
  blogPostTooltipsInfo,
  tripStartDate,
  tripEndDate
) =>
  blogPostTooltipsInfo.map(tooltipInfo => {
    const enrichedTooltipInfo = tooltipInfo
    enrichedTooltipInfo.elapsedPercentage = getElapsedPercentage(
      new Date(tooltipInfo.eventDate),
      tripStartDate,
      tripEndDate
    )

    return enrichedTooltipInfo
  })

const TripData = ({ blogPostTooltipsInfo }) => {
  const tripStartDate = new Date("2019-12-29")
  const tripEndDate = new Date("2020-03-23")

  const enrichedBlogPostTooltipsInfo = enrichBlogPostTooltipsInfoWithPercentage(
    blogPostTooltipsInfo,
    tripStartDate,
    tripEndDate
  )

  return (
    <Style.Wrapper>
      <DaysCounter daysElapsed={getDaysElapsed(tripStartDate)} />
      <TripTimeline
        elapsedPercentage={getElapsedPercentage(
          new Date(),
          tripStartDate,
          tripEndDate
        )}
        blogPostTooltipsInfo={enrichedBlogPostTooltipsInfo}
      />
    </Style.Wrapper>
  )
}

export default TripData
