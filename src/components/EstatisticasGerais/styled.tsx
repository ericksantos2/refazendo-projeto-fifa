import { styled } from 'styled-components';

export const EstatGeraisDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  grid-area: resGeral;
  justify-content: center;
  > h1 {
    font-size: 18px;
    margin-bottom: 0.33rem;
  }
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
