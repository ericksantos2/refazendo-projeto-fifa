import { useEffect } from 'react';
import Cards from './components/Cards';
import Estatisticas from './components/Estatisticas';
import EstatisticasGerais from './components/EstatisticasGerais';
import FormNovaOpcao from './components/FormNovaOpcao';
import FormNovoJogador from './components/FormNovoJogador';
import AppContainer, { AppRoot } from './styles/AppStyled';
import useJogadores from './hooks/useJogadores';
import { useSelector } from 'react-redux';
import { RootState } from './store';

export default function App() {
  const { jogadores } = useJogadores();
  const inputs = useSelector(
    (state: RootState) => state.inputsNovoJogadorSlice
  );

  useEffect(() => {
    localStorage.setItem('jogadores', JSON.stringify(jogadores));
    localStorage.setItem('inputs', JSON.stringify(inputs));
  }, [jogadores, inputs]);

  return (
    <AppRoot>
      <AppContainer>
        <FormNovoJogador />
        <FormNovaOpcao />
        <EstatisticasGerais />
        <Estatisticas />
      </AppContainer>
      <Cards />
    </AppRoot>
  );
}
