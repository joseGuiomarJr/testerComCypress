import 'cypress-file-upload';

import { usuarioAdmNegativoBranco } from '../app.cy';

it('FUNCIONAL NEGATIVOS COM TODOS OS CAMPOS EM BRANCO', () => {
    cy.visit('/');
    cy.cadastrarAdmNegativoEmBranco(usuarioAdmNegativoBranco, true);
    cy.get('.form > :nth-child(3)').contains("Nome é obrigatório").should('be.visible');
    cy.get('.form > :nth-child(4)').contains("Email é obrigatório").should('be.visible');
    cy.get('.alert > :nth-child(2)').contains("Password é obrigatório").should('be.visible');

});