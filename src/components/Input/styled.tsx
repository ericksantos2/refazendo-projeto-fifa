import { styled } from "styled-components";

export const InputDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.33rem;
`

export const LabelInput = styled.label`
  display: block;
  font-size: 1.15rem;
  font-weight: 500;
`

const InputStyled = styled.input`
  --opacidade-borda: 0.2;
  border: 1px solid rgba(0, 0, 0, var(--opacidade-borda));
  border-radius: 1rem;
  font-family: var(--font-family);
  font-size: 1rem;
  padding: 0.5rem 1rem;
  text-align: center;
  transition: 100ms;
  &:focus {
    --opacidade-borda: 0.6;
    outline: none;
    transition: 350ms;
  }
`

export default InputStyled;