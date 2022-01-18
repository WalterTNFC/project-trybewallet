// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_VALUE, GET_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalValue: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_VALUE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      totalValue: state.totalValue + (parseFloat(action.payload.value) * action.ask),
    };
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
