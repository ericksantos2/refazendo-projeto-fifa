import { styled } from 'styled-components';

export const SelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.33rem;
  text-align: center;
`;

export const SelectStyled = styled.div<{
  value: string;
  enabled: 'true' | 'false';
  textoclaro?: 'true' | 'false';
}>`
  --opacidade-borda: 0.2;
  appearance: none;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, var(--opacidade-borda));
  border-radius: 1rem 1rem
    ${(props) => (props.enabled === 'true' ? '0 0' : '1rem 1rem')};
  font-family: var(--font-family);
  font-size: 1rem;
  font-weight: ${(props) => (props.textoclaro === 'true' ? '300' : '400')};
  min-height: 2.1rem;
  min-width: 200px;
  outline: none;
  padding: 0.5rem 1rem;
  position: relative;
  transition: border 250ms;
  > div {
    display: ${(props) => (props.enabled === 'true' ? 'block' : 'none')};
    transition: 250ms;
    width: calc(100% + 2px);
  }
  &:before {
    content: '${(props) => props.value}';
  }
  ${(props) => (props.enabled === 'true' ? '--opacidade-borda: 0.6' : '')};
`;

export const OpcoesSelect = styled.div`
  /* --opacidade-borda: 0.6; */
  background-color: white;
  border: 1px solid rgba(0, 0, 0, var(--opacidade-borda));
  border-radius: 0 0 1rem 1rem;
  top: 2rem;
  left: -1px;
  padding: 0.33rem 0;
  position: absolute;
  transition: 50ms;
  z-index: 1;

  option {
    line-height: 1.33rem;
    padding: 0 1rem;
    /* text-align: center; */
  }
  option:hover {
    cursor: pointer;
    opacity: 0.5;
    transition: 250ms;
  }
`;
