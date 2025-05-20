import 'cypress-file-upload';

import { usuarioAdmNegativoDois } from '../app.cy';


    it('CADASTRO COM CAMPO NOME EM BRANCO', () => {
        cy.visit('/');
        cy.cadastrarAdmNegativoDois(usuarioAdmNegativoDois, true);
        cy.get('.alert > :nth-child(2)').contains("Nome é obrigatório").should('be.visible');
        cy.get('#nome').clear();
    });



