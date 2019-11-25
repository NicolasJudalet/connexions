import React from "react"
import Img from "gatsby-image"
import { format } from "date-fns"
import { fr } from "date-fns/locale"

import Style from "./PhotoComponent.style"

const PhotoComponent = ({ asset, date }) => {
  return (
    <Style.Wrapper>
      <Style.DateBanner>
        {format(new Date(date), "dd MMMM", { locale: fr })}
      </Style.DateBanner>
      <Img alt={asset.node.id} fluid={asset.node.fluid} />
    </Style.Wrapper>
  )
}

export default PhotoComponent
