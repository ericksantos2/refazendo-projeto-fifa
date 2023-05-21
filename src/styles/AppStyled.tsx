import { styled } from "styled-components";

export const AppRoot = styled.div`
  width: 100%;
  min-height: 120vh;
`

const AppContainer = styled.div`
  display: grid;
  grid-template-areas:
    "form formSelect"
    "resGeral res";
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  width: 100%;
  height: 100vh;
`

export default AppContainer;