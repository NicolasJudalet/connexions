import React from "react"

import Style from "./PhotoHighlights.style"
import PhotoCarrousel from "./PhotoCarrousel"

const PhotoHighlights = () => (
  <Style.Wrapper>
    <Style.TitleContainer>
      <Style.Icon>
        <span role="img" aria-label="camera">
          📷
        </span>
      </Style.Icon>
      <Style.Title>Photos</Style.Title>
    </Style.TitleContainer>
    <PhotoCarrousel />
    <Style.Link to="/photos">
      {" "}
      <span role="img" aria-label="triangle">
        ▶
      </span>
    </Style.Link>
  </Style.Wrapper>
)

export default PhotoHighlights
