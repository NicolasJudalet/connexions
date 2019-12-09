import styled from "styled-components"
import { Document } from "react-pdf"

export default {
  Document: styled(Document)`
    ${props => `height: calc(${props.height}px - 100px);`}
    overflow: scroll;
  `,
}
