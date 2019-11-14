import React from "react"

import Style from "./PhotoCarrousel.style"
import patagonie from "../../../../assets/patagonie.png"
import peruano from "../../../../assets/peruano.png"

const PhotoCarrousel = () => (
  <Style.Wrapper>
    <Style.Photo src={patagonie} alt="Patagonie" />
    <Style.Photo src={peruano} alt="Peruano" />
    <Style.Photo src={patagonie} alt="Patagonie" />
    <Style.Photo src={patagonie} alt="Patagonie" />
    <Style.Photo src={patagonie} alt="Patagonie" />
    <Style.Photo src={patagonie} alt="Patagonie" />
  </Style.Wrapper>
)

export default PhotoCarrousel
