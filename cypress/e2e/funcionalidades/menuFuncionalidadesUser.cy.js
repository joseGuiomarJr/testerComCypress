import 'cypress-file-upload';

import { usuarioComum } from '../app.cy';



describe(' FUNCIONALIDADES MENU SUPERIOR USUARIO COMUM', () => {
  it('REALIZAR LOGIN COMO USER', () => {
    cy.visit('/');
    cy.cadastrarUsuario(usuarioComum);
    cy.wait(1000);
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



