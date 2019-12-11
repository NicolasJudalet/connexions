import React from "react"

import Style from "./TagFilter.style"

const TagFilter = ({ id, label, activatedTags, setActivatedTags }) => {
  const toggleFilterActivated = () => {
    setActivatedTags({ ...activatedTags, [id]: !activatedTags[id] })
  }

  return (
    <Style.Tag
      activated={activatedTags && activatedTags[id]}
      onClick={toggleFilterActivated}
    >
      {label}
    </Style.Tag>
  )
}

export default TagFilter
