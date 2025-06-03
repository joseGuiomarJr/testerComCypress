import 'cypress-file-upload';

import {cadastrarUsuario, loginUser, usuarioComum } from '../app.cy';

it('REALIZAR LOGIN COMO USER', () => {
  cy.visit('/');
  cy.cadastrarUsuario(usuarioComum);
  
});