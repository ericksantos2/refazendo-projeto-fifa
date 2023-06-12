import EstatisticasGerais from "./components/EstatisticasGerais";
import FormNovaOpcao from "./components/FormNovaOpcao";
import FormNovoJogador from "./components/FormNovoJogador";
import AppContainer, { AppRoot } from "./styles/AppStyled";

export default function App() {
  return (
    <AppRoot>
      <AppContainer>
        <FormNovoJogador />
        <FormNovaOpcao />
        <EstatisticasGerais />
      </AppContainer>
    </AppRoot>
  )
}