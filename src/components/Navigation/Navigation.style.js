import styled from "styled-components"
import Link from "gatsby-link"

export default {
  Wrapper: styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3em;
  `,

  SiteIcon: styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    font-family: sans-serif;
    color: black;
    font-size: 1.5em;
  `,
}
