import { styled } from 'styled-components';

export const CardsDiv = styled.div`
  display: grid;
  grid-template-columns: 17% 17% 17% 17% 17%;
  justify-content: center;
  width: 100%;
`;

export const Card = styled.div`
  align-items: center;
  border: 1px solid black;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  height: 30vh;
  justify-content: center;
  margin: 1rem;
  opacity: .8;
  padding: 0.5rem;
  > p {
    align-items: center;
    display: flex;
    gap: 0.33rem;
    > span {
      border: 1px solid black;
      border-radius: 10px;
      padding: 0.33rem 0.67rem;
    }
  }
`;
