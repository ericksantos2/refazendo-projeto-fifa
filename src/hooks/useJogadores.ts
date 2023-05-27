import { useDispatch, useSelector } from 'react-redux';
import { adicionarJogador } from '../store/reducers/jogadores';
import { IJogador } from '../interfaces/jogador';
import { RootState } from '../store';

export default function useJogadores() {
  const dispatch = useDispatch();
  const jogadores = useSelector((state: RootState) => state.jogadoresSlice);
  return {
    criaJogador(jogadorProps: IJogador) {
      const jogador = {...jogadorProps};
      dispatch(adicionarJogador(jogador))
    },
    listaJogadores() {
      return jogadores;
    }
  }
}