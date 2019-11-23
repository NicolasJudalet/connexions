import styled from "styled-components"
import { appBlue, black, white } from "../../styles"

export default {
  Wrapper: styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4em;
    /* ${props => `background-color:${props.isConnected ? appBlue : white}`}; */
    ${props =>
      props.isConnected
        ? `background: rgb(0,66,114);
        background: linear-gradient(180deg, rgba(0,66,114,1) 0%, rgba(37,146,213,1) 78%, rgba(255,255,255,1) 100%);`
        : `background: ${white};`}
    position: fixed;
    width: 100vw;
    left: 0;
    top: 0;
  `,
  SiteTitle: styled.span`
    text-transform: uppercase;
    font-family: sans-serif;
    font-size: 1.5em;
    ${props => `color:${props.isConnected ? white : black}`};
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
