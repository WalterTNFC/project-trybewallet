// Coloque aqui suas actions
// A action retorna um objeto, recebe o parametro que será modificado
// e contem um tipo que será usado no switch, dentro do reducer

export const ADICIONAR_USER = 'ADICIONAR_USER';
export const FETCH_API = 'FETCH_API';
export const ADD_VALUE = 'ADD_VALUE';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const actionaddUser = (email) => ({
  type: 'ADICIONAR_USER',
  email,
});

const fetchAPI = () => ({
  type: 'FETCH_API',
});

export const getCurrencies = (payload, ask) => ({
  type: 'GET_CURRENCIES',
  payload,
  ask,
});

export const addValue = (payload, ask) => ({
  type: ADD_VALUE,
  payload,
  ask,
});

export const getData = () => (dispatch) => {
  dispatch(fetchAPI());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((payload) => dispatch(getCurrencies(payload)));
};
