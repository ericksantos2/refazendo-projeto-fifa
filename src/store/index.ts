import { configureStore } from '@reduxjs/toolkit';
import jogadoresSlice from './reducers/jogadores';

const store = configureStore({
  reducer:{
    jogadoresSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;