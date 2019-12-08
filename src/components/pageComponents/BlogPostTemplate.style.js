import styled from "styled-components"
import Img from "gatsby-image"

import { appLightBlue, black, normalFont } from "styles"

export default {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Img: styled(Img)`
    width: 80%;
    max-width: 700px;
  `,
  Date: styled.h2`
    width: 80%;
    max-width: 700px;
    margin-top: 10px;
    margin-bottom: 0px;
    text-align: left;
    font-family: ${normalFont};
    color: ${appLightBlue};
  `,
  Title: styled.h1`
    width: 80%;
    max-width: 700px;
    margin: 0;
    text-align: left;
    font-weight: bold;
    font-family: ${normalFont};
    color: ${black};
  `,
  Description: styled.div`
    width: 80%;
    max-width: 700px;
    font-family: ${normalFont};
    > p {
      margin-top: 10px;
      text-align: left;
    }
  `,
  PhotoWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    > .GatsbyImageWrapper {
      max-height: 80vh;
    }
  `,
  LeftPhotoContainer: styled.div`
    margin-right: 20px;

    > a {
      text-decoration: none;
      color: ${black};
    }
  `,
  RightPhotoContainer: styled.div`
    margin-left: 20px;

    > a {
      text-decoration: none;
      color: ${black};
    }
  `,
}
