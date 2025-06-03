import 'cypress-file-upload';

import { usuarioAdm, cadastrarUserMenuFuncionalidade, usuarioComum, usuarioAdm2, cadastrarUsuario, produto } from '../app.cy';


it('TESTANDO FUNCIONALIDADES ADM MENU INFERIOR', () => {
  cy.visit('/');
  cy.cadastrarUsuario(usuarioAdm, true);

});
it('FUNCIONALIDADE CADASTRO USUARIO ADM', () => {
  cy.wait(1000);
  cy.get('[data-testid="cadastrarUsuarios"]').click();
  cy.wait(1000);

});
it('FUNCIONALIDADE CADASTRAR COMO USUARIO COMUM COM DADOS VALIDOS', () => {
  cy.cadastrarUserMenuFuncionalidade(usuarioComum);
  cy.wait(1000);
  cy.get('[data-testid="home"]').click();
});
it('FUNCIONALIDADE CADASTRAR COMO USUARIO ADM COM DADOS VALIDOS', () => {
  cy.get('[data-testid="cadastrarUsuarios"]').click();
  cy.cadastrarAdmrMenuFuncionalidade(usuarioAdm2);
  cy.wait(1000);
  cy.get('[data-testid="home"]').click();
});
it('FUNCIONALIDADE LISTAR USUARIOS', () => {
  cy.get('[data-testid="listarUsuarios"]').click();
  cy.wait(1000);
});
it('FUNCIONALIDADE EXCLUIR USUARIO', () => {
  cy.get(':nth-child(1) > :nth-child(5) > .row > .btn-danger').click();
    cy.get('[data-testid="home"]').click();
});
it('FUNCIONALIDADE CADASTRAR PRODUTO', () => {
  cy.get('[data-testid="cadastrarProdutos"]').click();
  cy.cadastrarProduto(produto);
});
it('FUNCIONALIDADE EXCLUIR PRODUTO', () => {
  cy.get(':nth-child(1) > :nth-child(6) > .row > .btn-danger').click();
  cy.get('[data-testid="home"]').click();
});
it('FUNCIONALIDADE LISTAR PRODUTO', () => {
  cy.get('[data-testid="listarProdutos"]').click();
  cy.get('[data-testid="home"]').click();
});
it('FUNCIONALIDADE RELATÓRIOS', () => {
  cy.get('[data-testid="relatorios"]').click();
  cy.get('[data-testid="home"]').click();
});
