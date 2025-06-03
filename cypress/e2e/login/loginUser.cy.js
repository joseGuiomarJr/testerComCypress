import 'cypress-file-upload';

import { usuarioComum } from '../app.cy';

it('REALIZAR LOGIN COMO USER', () => {
  cy.visit('/');
  cy.cadastrarUsuario(usuarioComum);
  
});