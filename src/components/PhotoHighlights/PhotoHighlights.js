import React from "react"

import Style from "./PhotoHighlights.style"
import PhotoCarrousel from "./PhotoCarrousel"
import { Link } from "gatsby"

const PhotoHighlights = () => (
  <Style.Wrapper>
    <Style.TitleContainer>
      <Style.Icon>📷</Style.Icon>
      <Style.Title>Photos</Style.Title>
    </Style.TitleContainer>
    <PhotoCarrousel />
    <Style.Link to="/photos">▶</Style.Link>
  </Style.Wrapper>
)

export default PhotoHighlights
