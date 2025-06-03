import { faker } from '@faker-js/faker';
import 'cypress-file-upload';
import { usuarioComum, } from '../app.cy';



describe('TESTES FUNCIONAIS FRONT-SERVEREST', () => {

  it('REALIZAR LOGIN COMO USER', () => {
    cy.visit('/');
    cy.cadastrarUsuario(usuarioComum);
  });
  it('PESQUISANDO PRODUTOS', () => {
    cy.get('[data-testid="pesquisar"]').type('Fresh Granite Hat');
    cy.get('[data-testid="botaoPesquisar"]').click();
  });
});