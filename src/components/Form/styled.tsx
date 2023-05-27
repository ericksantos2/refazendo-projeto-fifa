import { styled } from "styled-components";

export const FormDiv = styled.div`
  grid-area: form;
  > form {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    justify-content: center;
    > button {
      min-height: 50px;
      min-width: 250px;
    }
  }
`