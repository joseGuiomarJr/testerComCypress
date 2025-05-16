import 'cypress-file-upload';

import { loginUser, loginUserAdm, usuarioAdm } from '../app.cy';


  it('REALIZAR LOGIN COMO USER', () => {
    cy.visit('/');
    cy.cadastrarUsuario(usuarioAdm, true);
    cy.get('.alert-link').contains("Cadastro realizado com sucesso");
    cy.logout();
    cy.login(loginUserAdm());
   
  });