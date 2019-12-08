import React from "react"

import { differenceInDays, startOfDay } from "date-fns"

import Style from "./TripData.style"
import DaysCounter from "./DaysCounter"
import TripTimeline from "./TripTimeline"

const getDaysElapsed = tripStartDate =>
  differenceInDays(startOfDay(new Date()), tripStartDate)

const getElapsedPercentage = (tripStartDate, tripEndDate) =>
  Math.max(
    0,
    ((new Date() - tripStartDate) / (tripEndDate - tripStartDate)) * 100
  )

const TripData = () => {
  const tripStartDate = new Date("2019-12-29")
  const tripEndDate = new Date("2020-05-14")

  return (
    <Style.Wrapper>
      <DaysCounter daysElapsed={getDaysElapsed(tripStartDate)} />
      <TripTimeline
        elapsedPercentage={getElapsedPercentage(tripStartDate, tripEndDate)}
      />
    </Style.Wrapper>
  )
}

export default TripData
