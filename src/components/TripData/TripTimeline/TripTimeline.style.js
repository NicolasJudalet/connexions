import styled from "styled-components"

import {
  appBlue,
  black,
  fontSizeS,
  normalFont,
  markerSizeS,
  white,
} from "styles"

export default {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
  `,
  Line: styled.div`
    border: solid 1px;
    border-color: ${appBlue};
    flex-grow: 1;
    height: 0;
  `,
  Icon: styled.div`
    font-size: 3em;
  `,
  Avatar: styled.div`
    position: relative;
    top: -25px;
    ${props => `left: calc(${props.elapsedPercentage / 100}*(100% - 50px));`}
    border-radius: 50px;
    height: 50px;
    width: 50px;
  `,
  Image: styled.img`
    width: 100%;
    border-radius: 50px;
  `,
  BlogPostMarker: styled.div`
    width: ${markerSizeS};
    height: ${markerSizeS};
    border-radius: ${markerSizeS};
    position: relative;
    top: calc(-50px - ${markerSizeS} / 2);
    background-color: ${appBlue};
    cursor: pointer;

    & .tooltiptext {
      visibility: hidden;

      width: 100px;
      max-height: 52px;

      font-family: ${normalFont};
      font-size: ${fontSizeS};
      color: ${black};
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;

      padding: 5px 0;
      border-radius: 6px;
      border: solid 1px ${appBlue};
      background-color: ${white};
      opacity: 0;
      transition: opacity 0.5s;

      position: absolute;
      bottom: 10px;
      left: -50px;
      z-index: 1;

      & .blogPostTitle {
        font-weight: 800;
      }
    }

    &:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
    }
  `,
}
