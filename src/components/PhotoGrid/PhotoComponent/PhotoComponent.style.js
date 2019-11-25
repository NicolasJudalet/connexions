import styled from "styled-components"
import { white, normalFont } from "../../../styles"

export default {
  Wrapper: styled.div`
    position: relative;
    padding: 5px;
    min-width: 300px;
    flex-grow: 1;
    justify-content: flex-start;
  `,
  DateBanner: styled.div`
    position: absolute;
    bottom: 0%;
    opacity: 75%;
    background-color: ${white};
    z-index: 1;
    height: 30px;
    width: 100%;
    font-family: ${normalFont};
    text-align: center;
  `,
}
