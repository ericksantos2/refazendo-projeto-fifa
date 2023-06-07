import { useDispatch, useSelector } from 'react-redux';
import { adicionarJogador } from '../store/reducers/jogadores';
import { IJogador, ItemJogador } from '../interfaces/jogador';
import { RootState } from '../store';

type KeysEstatisticas = 'qualidade' | 'liga' | 'clube' | 'nacionalidade';

interface ItemEstatisticas {
  nome: string;
  value: string;
  quantidade: number;
}

type Estatisticas = {
  [x in KeysEstatisticas]: ItemEstatisticas[];
}

export default function useJogadores() {
  const dispatch = useDispatch();
  const jogadores = useSelector((state: RootState) => state.jogadoresSlice);
  return {
    criaJogador(jogadorProps: IJogador) {
      const jogador = { ...jogadorProps };
      dispatch(adicionarJogador(jogador));
    },
    listaJogadores() {
      return jogadores;
    },
    getEstatisticas() {
      const estatisticas = jogadores.reduce((state, action) => {
        return (Object.entries(action) as [KeysEstatisticas, ItemJogador][]).reduce(
          (stateEntries, [typeNaoTipado, { text, value }]) => {
            const type = typeNaoTipado as KeysEstatisticas
            const retornoB: Estatisticas = { ...stateEntries, [type]: [] };
            stateEntries[type] !== undefined && (retornoB[type] = [...stateEntries[type]]);
            const index = stateEntries[type]?.findIndex(
              (item) => item.value === value
            ) as number;
            if (stateEntries && stateEntries[type] && index >= 0) {
              (retornoB[type] as ItemEstatisticas[])[index].quantidade++;
            } else {
              retornoB[type].push({
                value,
                quantidade: 1,
                nome: text,
              });
            }
            return retornoB;
          },
          { ...state }
        );
      }, {} as Estatisticas);
      console.log(estatisticas);
      /*
        {
          qualidade: [{ value: 'ouro', quantidade: 1, nome: 'Ouro'}],
          liga: [{ value: 'la_liga', quantidade: 1, nome: 'La Liga'}],
        }
      */
      return estatisticas;
    },
  };
}
