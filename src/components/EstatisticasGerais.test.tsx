import { act, render } from '@testing-library/react';
import EstatisticasGerais from './EstatisticasGerais';
import { Provider } from 'react-redux';
import storeImport from '../store';
import { configureStore } from '@reduxjs/toolkit';
import jogadoresSlice, { adicionarJogador } from '../store/reducers/jogadores';
import { criaInput as criaItem } from '../utils/criaInput';

describe('Testes das estatísticas gerais', () => {
  test('Teste se tá tudo aparecendo', () => {
    const screen = render(
      <Provider store={storeImport}>
        <EstatisticasGerais />
      </Provider>
    );

    const qualidade = screen.getByText('Qualidade com mais jogadores:');
    expect(qualidade).toBeDefined();
  });
  test('Teste de maior qualidade', () => {
    const store = configureStore({
      reducer: {
        jogadoresSlice,
      },
    });
    const screen = render(
      <Provider store={store}>
        <EstatisticasGerais />
      </Provider>
    );
    const qualidade = screen.getByText('Qualidade com mais jogadores:');
    // função para conseguir o atual valor de qualidade
    const qualidadeComMaisJogadores = () =>
      qualidade.getElementsByTagName('span')[0].innerHTML;
    // esperado que nenhuma qualidade seja a maior, pois ainda não tem nenhuma.
    expect(qualidadeComMaisJogadores()).toBe('Nenhuma por enquanto');
    // função para adicionar um novo jogador simples (todos os campos com o mesmo valor)
    const adicionaJogadorSimples = (nome: string) => {
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
    // adiciona ouro para a qualidade com mais jogadores se tornar ouro
    adicionaJogadorSimples('Ouro');
    expect(qualidadeComMaisJogadores()).toBe('Ouro');
    // adiciona duas vezes outro jogador para que a qualidade com mais jogadores se torne outra
    adicionaJogadorSimples('Ouro+');
    adicionaJogadorSimples('Ouro+');
    expect(qualidadeComMaisJogadores()).toBe('Ouro+');
  });
});
