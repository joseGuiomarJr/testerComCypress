import 'cypress-file-upload';

import { usuarioAdmNegativoTres } from '../app.cy';
   
    it('FUNCIONAL NEGATIVO CADASTRO COM CAMPO SENHA EM BRANCO', () => {
        cy.visit('/');
        cy.cadastrarAdmNegativoTres(usuarioAdmNegativoTres, true);
        cy.get('.alert > :nth-child(2)').contains("Password é obrigatório").should('be.visible');
    });




