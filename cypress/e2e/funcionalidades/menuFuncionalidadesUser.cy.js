import 'cypress-file-upload';

import { loginUser, usuarioComum } from '../app.cy';



describe('TESTANDO FUNCIONALIDADES MENU PRINCIPAL', () => {
    it('REALIZAR LOGIN COMO USER', () => {
    cy.visit('/');
    cy.cadastrarUsuarioComum(usuarioComum, true);
    cy.get('.alert-link').contains("Cadastro realizado com sucesso");
    cy.logout();
    cy.login(loginUser());
   
  });
   it('TESTANDO FUNCIONALIDADE MENU LISTA DE COMPRAS ', () => {
    cy.get('[data-testid="lista-de-compras"]').click();
   });
   
   it('TESTANDO FUNCIONALIDADE MENU CARRINHO ', () => {
    cy.get('[data-testid="carrinho"]').click();
   });
   
   it('TESTANDO FUNCIONALIDADE MENU HOME ', () => {
    cy.get('[data-testid="home"]').click();
   });
   
   it('TESTANDO FUNCIONALIDADE MENU LOGOUT ', () => {
    cy.get('[data-testid="logout"]').click();
   });
   
});
  
