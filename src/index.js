import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/index';
import * as serviceWorker from './serviceWorker';

// O Provider vai ser usado para conter toda aplicação react
// e atribuir a ela as funcionalidades do redux
// LEMBRAR SEMPRE DE ATRIBUIR A STORE AO PROVIDER- DESESTRUTURAR UMA PROPS
ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
