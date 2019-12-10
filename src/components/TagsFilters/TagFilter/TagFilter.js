import React, { useState } from "react"

import Style from "./TagFilter.style"

const TagFilter = ({ label }) => {
  const [filterActivated, setFilterActivated] = useState(false)

  const toggleFilterActivated = () => {
    setFilterActivated(!filterActivated)
  }

  return (
    <Style.Tag activated={filterActivated} onClick={toggleFilterActivated}>
      {label}
    </Style.Tag>
  )
}

export default TagFilter
