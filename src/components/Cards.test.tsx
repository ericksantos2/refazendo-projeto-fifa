import { render } from '@testing-library/react';
import useAdicionaJogadorSimples from '../utils/testUtils';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import jogadoresSlice from '../store/reducers/jogadores';
import Cards from './Cards';

describe('Testes de cards', () => {
  test('Teste de adicionar cards', () => {
    const store = configureStore({
      reducer: {
        jogadoresSlice,
      },
    });
    const adicionarJogadorSimples = useAdicionaJogadorSimples(store);
    const screen = render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );
    const cardsDiv = screen.container.children[0];
    // não tem nenhum card ainda
    expect(cardsDiv.children.length).toBe(0);
    adicionarJogadorSimples('Qualquer coisa');
    // agora tem um card
    expect(cardsDiv.children.length).toBe(1);
    adicionarJogadorSimples('Qualquer coisa');
    // agora tem 2 cards
    expect(cardsDiv.children.length).toBe(2);
  });
});
