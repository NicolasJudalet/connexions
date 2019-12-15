import styled from "styled-components"

import { normalFont } from "styles"

export default {
  Wrapper: styled.div`
    padding: 10px;
    display: flex;
    flex-flow: wrap;
  `,
  Text: styled.span`
    font-family: ${normalFont};
  `,
}
