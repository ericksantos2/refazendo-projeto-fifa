import {
  Estatisticas,
  ItemEstatisticas,
  KeysEstatisticas,
  Maiores,
} from '../interfaces/estatisticas';
import { ItemJogador } from '../interfaces/jogador';
import useJogadores from './useJogadores';

export default function useEstatisticas() {
  const jogadores = useJogadores().jogadores;
  const estatisticas = jogadores.reduce((state, action) => {
    return (Object.entries(action) as [KeysEstatisticas, ItemJogador][]).reduce(
      (stateEntries, [typeNaoTipado, { text, value }]) => {
        const type = typeNaoTipado as KeysEstatisticas;
        const retornoB: Estatisticas = { ...stateEntries, [type]: [] };
        stateEntries[type] !== undefined &&
          (retornoB[type] = [...stateEntries[type]]);
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
  const maiores = Object.entries(estatisticas).reduce(
    (state, [keyNaoTipada, item]: [string, ItemEstatisticas[]]) => {
      const key = keyNaoTipada as KeysEstatisticas;
      const itemASerRetornado = item.sort(
        (a, b) => b.quantidade - a.quantidade
      )[0];
      return {
        ...state,
        [key]: itemASerRetornado,
      };
    },
    {} as Maiores
  );
  return {
    estatisticas,
    maiores,
  };
}
