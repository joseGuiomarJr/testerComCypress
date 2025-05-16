import 'cypress-file-upload';

Cypress.Commands.add('cadastrarUsuario', ({ nome, email, senha }, isAdmin = false) => {
  cy.get('[data-testid="cadastrar"]').click();
  cy.get('[data-testid="nome"]').type(nome);
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="password"]').type(senha);
  if (isAdmin) cy.get('[data-testid="checkbox"]').click();
  cy.get('[data-testid="cadastrar"]').click();
});

Cypress.Commands.add('cadastrarUsuarioComum', ({ nome, email, senha }) => {
  cy.get('[data-testid="cadastrar"]').click();
  cy.get('[data-testid="nome"]').type(nome);
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="password"]').type(senha);
  cy.get('[data-testid="cadastrar"]').click();
});

Cypress.Commands.add('login', ({email, senha}) => {
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="senha"]').type(senha);
  cy.get('[data-testid="entrar"]').click();
});

Cypress.Commands.add('logout', () => {
  cy.get('[data-testid="logout"]').click();
});

Cypress.Commands.add('cadastrarProduto', ({ nome, preco, descricao, quantidade, imagem }) => {
  cy.get('[data-testid="cadastrar-produtos"]').click();
  cy.get('[data-testid="nome"]').type(nome);
  cy.get('[data-testid="preco"]').type(preco.toString());
  cy.get('[data-testid="descricao"]').type(descricao);
  cy.get('[data-testid="quantity"]').type(quantidade.toString());
  cy.get('[data-testid="imagem"]').attachFile(imagem);
  cy.get('[data-testid="cadastarProdutos"]').click();
});

