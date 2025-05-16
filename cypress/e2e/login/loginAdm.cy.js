import 'cypress-file-upload';

import {loginUserAdm, usuarioAdm } from '../app.cy';


  it('REALIZAR LOGIN COMO ADMINISTRADOR', () => {
    cy.visit('/');
    cy.cadastrarUsuario(usuarioAdm, true);
    cy.get('.alert-link').contains("Cadastro realizado com sucesso");
    cy.logout();
    cy.login(loginUserAdm());
   
  });