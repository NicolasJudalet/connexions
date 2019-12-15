import styled from "styled-components"
import { Link } from "gatsby"

import { black } from "styles"

export default {
  Wrapper: styled.div`
    display: grid;
    grid-gap: 5px;
    ${props =>
      `grid-template-columns: repeat(${Math.min(
        5,
        1 + Math.floor(props.screenWidth / 300)
      )}, 1fr)`};
  `,
  Link: styled(Link)`
    grid-column: span 1;
    height: 0;
    padding-top: 75%;
    position: relative;
    color: ${black};
    background-color: ${black};

    > .PhotoComponent {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `,
}
