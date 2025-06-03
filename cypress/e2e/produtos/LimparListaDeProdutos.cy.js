
import 'cypress-file-upload';
import { cadastrarProduto, usuarioAdm } from '../app.cy';


describe('LIMPANDO LISTA DO CARRINHO', () => {

   it('EXCLUINDO LISTA DO CARRINHO', () => {
       cy.visit('/');
       cy.cadastrarUsuario(usuarioAdm, true);
       cy.get('.alert-link').contains("Cadastro realizado com sucesso");
   });
    it('ADICIONANDO PRODUTOS NO CARRINHO', () => {
        cy.cadastrarProduto(cadastrarProduto);
        
    });
  

});