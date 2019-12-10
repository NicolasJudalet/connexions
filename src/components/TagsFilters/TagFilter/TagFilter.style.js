import styled from "styled-components"

import { appLightBlue, appLightGrey, black, white, normalFont } from "styles"

export default {
  Tag: styled.button`
    ${props => `background: ${props.activated ? appLightBlue : appLightGrey};`}
    ${props => `color: ${props.activated ? white : black};`}
    ${props => `border: solid 1px ${props.activated ? white : black};`}
    padding: 1px 10px;
    border-radius: 20px;
    font-family: ${normalFont};
    font-size: 0.9em;
    margin-left: 3px;
    cursor: pointer;
    outline: none;
  `,
}
