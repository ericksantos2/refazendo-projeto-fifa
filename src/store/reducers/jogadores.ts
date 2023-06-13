import { createSlice } from '@reduxjs/toolkit';
import { IJogador } from '../../interfaces/jogador';

const initialState: IJogador[] =
  JSON.parse(localStorage.getItem('jogadores') as string) || [];

const jogadoresSlice = createSlice({
  name: 'jogadores',
  initialState,
  reducers: {
    adicionarJogador(state, { payload }) {
      return [...state, payload];
    },
  },
});

export const { adicionarJogador } = jogadoresSlice.actions;
export default jogadoresSlice.reducer;
