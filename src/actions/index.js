// A action retorna um objeto, recebe o parametro que será modificado
// e contem um tipo que será usado no switch, dentro do reducer

const actionaddEmail = (state) => ({
  type: 'ADICIONAREMAIL',
  state,
});

export default actionaddEmail;
