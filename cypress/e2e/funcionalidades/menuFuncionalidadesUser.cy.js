import 'cypress-file-upload';

import { loginUser, usuarioComum } from '../app.cy';



describe(' FUNCIONALIDADES MENU PRINCIPAL', () => {
    it('REALIZAR LOGIN COMO USER', () => {
    cy.visit('/');
    cy.cadastrarUsuarioComum(usuarioComum, true);
    cy.get('.alert-link').contains("Cadastro realizado com sucesso");
    cy.logout();
    cy.login(loginUser());
   
  });
   it(' FUNCIONALIDADE MENU LISTA DE COMPRAS ', () => {
    cy.get('[data-testid="lista-de-compras"]').click();
   });
   
   it(' FUNCIONALIDADE MENU CARRINHO ', () => {
    cy.get('[data-testid="carrinho"]').click();
   });
   
   it('FUNCIONALIDADE MENU HOME ', () => {
    cy.get('[data-testid="home"]').click();
   });
   
   it(' FUNCIONALIDADE MENU LOGOUT ', () => {
    cy.get('[data-testid="logout"]').click();
   });
   
});
  
