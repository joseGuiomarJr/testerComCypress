import 'cypress-file-upload';

import { produto, usuarioComum } from '../app.cy';

it('REALIZAR LOGIN COMO USER', () => {
  cy.visit('/');
  cy.cadastrarUsuario(usuarioComum);
  cy.wait(1000);
});
it('PERQUISANDO PRODUTOS', () => {
  cy.get('[data-testid="pesquisar"]').type(produto.nome);
  cy.get('[data-testid="botaoPesquisar"]').click();
  
});

