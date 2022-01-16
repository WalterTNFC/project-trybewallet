// Coloque aqui suas actions
// A action retorna um objeto, recebe o parametro que será modificado
// e contem um tipo que será usado no switch, dentro do reducer

export const ADICIONAR_USER = 'ADICIONAR_USER';

export const actionaddUser = (email) => ({
  type: 'ADICIONAR_USER',
  email,
});
