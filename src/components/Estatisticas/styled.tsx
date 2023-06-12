import { styled } from "styled-components";

export const EstatisticasDiv = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  grid-area: res;
  justify-content: center;
  > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 25%;
    > h1 {
      font-size: 18px;
    }
    > ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.33rem;
      justify-content: center;
      opacity: .8;
      > li {
        border: 1px solid black;
        border-radius: 10px;
        padding: 0.33rem .67rem;
        text-align: center;
      }
    }
  }
`