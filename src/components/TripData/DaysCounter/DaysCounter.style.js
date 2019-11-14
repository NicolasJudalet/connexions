import styled from "styled-components"

import { appBlue, marginL, fontSizeL, fontSizeXXL, normalFont } from "styles"

export default {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-right: ${marginL};
  `,
  Text: styled.span`
    font-family: ${normalFont};
    font-size: ${fontSizeL};
  `,
  CounterText: styled.span`
    font-family: ${normalFont};
    font-size: ${fontSizeXXL};
    font-weight: bold;
    color: ${appBlue};
  `,
}
