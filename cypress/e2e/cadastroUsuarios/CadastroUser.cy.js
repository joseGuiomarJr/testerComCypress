import 'cypress-file-upload';

import { usuarioComum } from '../app.cy';

  it('CADASTRAR COMO ADMINISTRADOR COM DADOS VALIDOS', () => {
    cy.visit('/');
    cy.cadastrarUsuarioComum(usuarioComum, true);
    cy.get('.alert-link').contains("Cadastro realizado com sucesso");
  });

    