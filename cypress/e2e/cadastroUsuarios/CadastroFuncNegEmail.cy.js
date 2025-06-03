import 'cypress-file-upload';

import {  usuarioAdmNegativo } from '../app.cy';


describe('TESTES FUNCIONAIS NEGATIVOS TELA CADASTRO', () => {
    it.only('CADASTRO COM CAMPO E-MAIL EM BRANCO ', () => {
        cy.visit('/');
        cy.cadastrarAdmNegativo(usuarioAdmNegativo, true);
        cy.get('.alert > :nth-child(2)').contains("Email é obrigatório").should('be.visible');
        cy.get('#nome').clear();


    });
    it('CADASTRO COM CAMPO NOME EM BRANCO', () => {
        cy.cadastrarAdmNegativoDois(usuarioAdmNegativoDois, true);
        cy.get('.alert > :nth-child(2)').contains("Nome é obrigatório").should('be.visible');
        cy.get('#nome').clear();
    });
});



