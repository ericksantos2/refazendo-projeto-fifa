import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'reset.css';
import GlobalStyle from './styles/GlobalStyle';
import { Provider } from 'react-redux';
import store from './store/index.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
