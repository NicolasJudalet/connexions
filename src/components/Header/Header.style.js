import styled from "styled-components"
import { white } from "../../styles"

export default {
  Wrapper: styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4em;
    background: rgb(0, 66, 114);
    background: linear-gradient(
      180deg,
      rgba(0, 66, 114, 1) 0%,
      rgba(37, 146, 213, 1) 78%,
      rgba(255, 255, 255, 1) 100%
    );
    position: fixed;
    width: 100vw;
    left: 0;
    top: 0;
    z-index: 2;
  `,
  SiteTitle: styled.span`
    font-family: Helvetica, sans-serif;
    font-family: sans-serif;
    font-size: 1.5em;
    color: ${white};
  `,
  Title: styled.div`
    border: none;
    display: flex;
    align-items: center;
    background: none;
  `,
  Logo: styled.img`
    margin-right: 10px;
    width: 30px;
  `,
}
