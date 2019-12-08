import styled from "styled-components"
import { Link } from "gatsby"

import { black } from "styles"

export default {
  Wrapper: styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  `,
  Link: styled(Link)`
    grid-column: span 2;
    height: 0;
    padding-top: 75%;
    position: relative;
    color: ${black};
    background-color: ${black};

    > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `,
}
