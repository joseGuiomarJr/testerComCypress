import 'cypress-file-upload';

import { loginUser, usuarioComum } from '../app.cy';
import { login } from '../app.cy';
import { logout } from '../app.cy';

  it('REALIZAR LOGIN COMO USER', () => {
    cy.visit('/');
    cy.cadastrarUsuarioComum(usuarioComum, true);
    cy.get('.alert-link').contains("Cadastro realizado com sucesso");
    cy.logout();
    cy.login(loginUser());
   
  });