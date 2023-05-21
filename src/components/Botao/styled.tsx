import { styled } from "styled-components";

const Botao = styled.button`
  background-color: #e4e4e4;
  border: none;
  border-radius: 10px;
  font-family: var(--font-family);
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: 50ms;
  max-width: 350px;
  &:hover {
    opacity: .75;
    transition: 350ms;
  }
`

export default Botao;