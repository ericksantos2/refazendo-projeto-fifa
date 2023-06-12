import { render } from '@testing-library/react';
import Estatisticas from './Estatisticas';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import jogadoresSlice from '../store/reducers/jogadores';
import useAdicionaJogadorSimples from '../utils/testUtils';

describe('Testes das estatísticas', () => {
  test('Teste se adiciona itens ao adicionar um novo jogador', () => {
    const store = configureStore({
      reducer: {
        jogadoresSlice,
      },
    });
    const adicionaJogadorSimples = useAdicionaJogadorSimples(store);
    const screen = render(
      <Provider store={store}>
        <Estatisticas />
      </Provider>
    );
    // const { dispatch } = store;
    const qualidade = screen.getByText('Qualidades').parentElement?.children[1]; // o item selecionado é um H1, por isso volta para o parentElement e depois vai para a ul (children[1])
    expect(qualidade?.children[0].innerHTML).toBe('Nenhuma por enquanto');
    adicionaJogadorSimples('Maior que ouro');
    expect(qualidade?.children[0].innerHTML).toBe('Maior que ouro: 1');
    adicionaJogadorSimples('Maior que ouro');
    expect(qualidade?.children[0].innerHTML).toBe('Maior que ouro: 2');
    adicionaJogadorSimples('Ouro');
    expect(qualidade?.children[1].innerHTML).toBe('Ouro: 1');
  });
});
