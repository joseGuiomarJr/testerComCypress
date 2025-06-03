import 'cypress-file-upload';
import { produto, usuarioComum } from '../app.cy';

it('REALIZAR LOGIN COMO USER', () => {
  cy.visit('/');
  cy.cadastrarUsuario(usuarioComum);
  cy.wait(1000);
});

it('PESQUISAR PRODUTO ATÉ ENCONTRAR', () => {
  const listaDeProdutos = ['Produto A', produto.nome, produto.nome, 'Recycled Plastic Gloves'];

  const pesquisarAteEncontrar = (indice = 0) => {
    if (indice >= listaDeProdutos.length) {
      throw new Error('Nenhum produto da lista foi encontrado');
    }

    const nomeProdutoAtual = listaDeProdutos[indice];
    cy.log(`Buscando: ${nomeProdutoAtual}`);

    cy.get('[data-testid="pesquisar"]').clear().type(nomeProdutoAtual);
    cy.get('[data-testid="botaoPesquisar"]').click();

    cy.wait(1000);

    
    cy.get('body').then(($body) => {
      const produtoEncontrado = $body.find(`[data-testid="nome-produto"]:contains("${nomeProdutoAtual}")`).length > 0;

      if (produtoEncontrado) {
        cy.log(`✅ Produto encontrado: ${nomeProdutoAtual}`);
    
        return;
      } else {
        cy.log(`Produto "${nomeProdutoAtual}" não encontrado. Tentando próximo...`);
        cy.wait(2000).then(() => {
          pesquisarAteEncontrar(indice + 1); 
        });
      }
    });
  };

  pesquisarAteEncontrar();
});
