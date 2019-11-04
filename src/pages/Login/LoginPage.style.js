import styled from "styled-components"
import { normalFont, fontSizeS, fontSizeM, fontSizeL, appBlue } from "styles"

export default {
  Wrapper: styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30vh;
  `,
  Title: styled.h2`
    font-family: ${normalFont};
    font-size: ${fontSizeL};
    font-weight: lighter;
    text-align: center;
  `,
  Input: styled.input`
    margin-bottom: 20px;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    text-align: center;
    font-size: ${fontSizeM};
  `,
  Label: styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Button: styled.button`
    text-transform: uppercase;
    font-family: ${normalFont};
    background-color: ${appBlue};
    color: white;
    font-size: ${fontSizeS};
    font-weight: bold;
    border-radius: 3px;
    width: 100px;
    padding: 5px;
  `,
  ErrorMessage: styled.div`
    display: flex;
    flex-direction: column;
    width: 190px;
    padding: 10px;
    margin: 0 0 10px;
    background-color: lightpink;
    border-radius: 3px;
    color: darkred;
    text-align: center;
    font-family: ${normalFont};
    font-size: ${fontSizeM};
  `,
}
