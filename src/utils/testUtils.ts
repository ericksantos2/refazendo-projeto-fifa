import { act } from '@testing-library/react';
import { adicionarJogador } from '../store/reducers/jogadores';
import { criaInput as criaItem } from './criaInput';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

export default function useAdicionaJogadorSimples(store: ToolkitStore) {
  return (nome: string) => {
    act(() => {
      store.dispatch(
        adicionarJogador({
          qualidade: criaItem(nome),
          liga: criaItem(nome),
          clube: criaItem(nome),
          nacionalidade: criaItem(nome),
        })
      );
    });
  };
}
