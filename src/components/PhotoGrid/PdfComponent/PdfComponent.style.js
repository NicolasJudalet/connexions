import styled from "styled-components"
import { white, normalFont } from "../../../styles"

export default {
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
  Wrapper: styled.div`
    > .PdfComponent {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;

      > .react-pdf__Page {
        width: 100%;
        height: 100%;
        overflow: hidden;

        > canvas {
          margin: auto;
        }
      }
    }
  `,
}
