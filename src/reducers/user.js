// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIALSTATE = {
  email: '',
};

const user = (state = INITIALSTATE, action) => {
  switch (action.type) {
  case 'ADICIONAREMAIL':
    return {
      ...state,
      email: action.state,
    };
  default:
    return state;
  }
};

export default user;
