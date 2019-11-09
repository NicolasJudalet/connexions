import styled from "styled-components"

import { appDarkBlue, white } from "styles"

export default {
  ExitButton: styled.button`
    position: fixed;
    right: 10px;
    height: 30px;
    border-radius: 3px;
    background-color: ${appDarkBlue};
    color: ${white};
    text-transform: uppercase;
    font-size: 0.9em;
    font-family: Avenir;
    font-weight: bold;
    cursor: pointer;
  `,
}
