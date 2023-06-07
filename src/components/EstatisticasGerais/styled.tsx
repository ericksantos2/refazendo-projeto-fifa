import { styled } from "styled-components";

export const EstatisticasDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  grid-area: resGeral;
  justify-content: center;
  > p {
    align-items: center;
    display: flex;
    gap: 0.5rem;
    opacity: 0.8;
    > span {
      border: 1px solid black;
      border-radius: 10px;
      padding: 0.33rem 0.67rem;
    }
  }
`;