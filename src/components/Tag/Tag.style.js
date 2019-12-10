import styled from "styled-components"

import { appLightBlue, normalFont } from "styles"

export default {
  Tag: styled.div`
    background: ${appLightBlue};
    padding: 1px 10px;
    border-radius: 20px;
    font-family: ${normalFont};
    color: white;
    font-size: 0.9em;
    margin-left: 3px;
  `,
}
