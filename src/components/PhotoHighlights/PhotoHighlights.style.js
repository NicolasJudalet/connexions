import styled from "styled-components"

import { marginS, normalFont, fontSizeL, marginL } from "../../styles"
import { Link } from "gatsby"

export default {
  Wrapper: styled.div`
    height: 160px;
    padding: ${marginS};
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  TitleContainer: styled.div`
    display: flex;
    flex-direction: column;
    margin-right: ${marginL};
  `,
  Title: styled.span`
    font-size: ${fontSizeL};
    font-family: ${normalFont};
  `,
  Icon: styled.span`
    width: 100%;
    text-align: center;
    font-size: 3em;
  `,
  Link: styled(Link)`
    text-decoration: none;
  `,
}
