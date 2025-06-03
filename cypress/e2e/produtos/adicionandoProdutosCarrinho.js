import {cadastrarUsuario, loginUser, usuarioComum,adicionarProdutos, produto } from '../app.cy';

it('REALIZAR LOGIN COMO USER', () => {
  cy.visit('/');
  cy.cadastrarUsuario(usuarioComum);
  
});
it('ADICIONANDO PRODUTOS NO CARRINHO', () => {
    cy.adicionarProdutos();


});
