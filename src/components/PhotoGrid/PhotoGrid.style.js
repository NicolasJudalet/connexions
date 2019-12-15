import styled from "styled-components"
import { Link } from "gatsby"

import { black } from "styles"

export default {
  Wrapper: styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr;

    @media (min-width: 300px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 600px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(5, 1fr);
    }
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
