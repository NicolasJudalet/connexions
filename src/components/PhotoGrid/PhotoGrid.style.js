import styled from "styled-components"
import { Link } from "gatsby"

import { black } from "styles"

export default {
  Wrapper: styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
  `,
  Link: styled(Link)`
    position: relative;
    padding: 5px;
    min-width: 300px;
    flex-grow: 1;
    justify-content: flex-start;
    color: ${black};
  `,
}
