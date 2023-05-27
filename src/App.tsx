import FormNovoJogador from "./components/FormNovoJogador";
import AppContainer, { AppRoot } from "./styles/AppStyled";

export default function App() {
  return (
    <AppRoot>
      <AppContainer>
        <FormNovoJogador />
      </AppContainer>
    </AppRoot>
  )
}