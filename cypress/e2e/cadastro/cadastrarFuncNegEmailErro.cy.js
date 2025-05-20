import 'cypress-file-upload';

import { usuariosEmailInvalido } from '../app.cy';
describe('Cadastro com e-mails inválidos', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-testid="cadastrar"]').click();
  });

  usuariosEmailInvalido.forEach((caso) => {
    it(`NÃO DEVE PERMITIR CADASTRO COM EMAILS INVALIDOS: ${caso.descricao}`, () => {
      const { nome, email, senha } = caso.dados;

      cy.get('[data-testid="nome"]').clear().type(nome);
      cy.get('[data-testid="email"]').clear().type(email);
      cy.get('[data-testid="password"]').clear().type(senha);
      cy.get('[data-testid="cadastrar"]').click();
      
    });
  });
});

    