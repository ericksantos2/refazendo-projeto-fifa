import { styled } from "styled-components";

export const AppRoot = styled.div`
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  display: grid;
  grid-template-areas:
    "form formSelect"
    "resGeral res";
  grid-template-columns: 50% 50%;
  grid-template-rows: 60% auto;
  width: 100%;
  height: 100vh;
`

export default AppContainer;