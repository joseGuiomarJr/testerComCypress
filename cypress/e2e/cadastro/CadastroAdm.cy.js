import 'cypress-file-upload';

import { usuarioAdm } from '../app.cy';

  it('CADASTRAR COMO ADMINISTRADOR COM DADOS VALIDOS', () => {
    cy.visit('/');
    cy.cadastrarUsuario(usuarioAdm, true);
    cy.get('.alert-link').contains("Cadastro realizado com sucesso");
  });

    