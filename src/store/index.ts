import { configureStore } from '@reduxjs/toolkit';
import jogadoresSlice from './reducers/jogadores';
import inputsNovoJogadorSlice from './reducers/inputsNovoJogador';

const store = configureStore({
  reducer:{
    jogadoresSlice,
    inputsNovoJogadorSlice
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;