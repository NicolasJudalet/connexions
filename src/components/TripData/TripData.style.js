import styled from "styled-components"
import { marginS } from "../../styles"

export default {
  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: space-between;
    padding: ${marginS};

    @media (max-width: 500px) {
      flex-direction: column;
    }
  `,
}
