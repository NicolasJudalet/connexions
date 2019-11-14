import styled from "styled-components"

import { appBlue, white, marginS } from "styles"

export default {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    margin: ${marginS};
    flex-grow: 1;
  `,
  Line: styled.div`
    border: solid 1px;
    border-color: ${appBlue};
    flex-grow: 1;
    height: 0;
  `,
  Icon: styled.div`
    font-size: 3em;
  `,
  Avatar: styled.div`
    position: relative;
    top: -25px;
    ${props => `left: ${props.elapsedPercentage}%;`}
    border-radius: 50px;
    height: 50px;
    width: 50px;
  `,
  Image: styled.img`
    width: 100%;
    border-radius: 50px;
  `,
}
