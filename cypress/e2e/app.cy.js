import { faker } from '@faker-js/faker';
import 'cypress-file-upload';


export const usuarioAdm = {
  nome: faker.person.fullName(),
  email: faker.internet.email(),
  senha: faker.internet.password()
};

export const usuarioAdm2 = {
  nome: faker.person.fullName(),
  email: faker.internet.email(),
  senha: faker.internet.password()
};

export const usuarioComum = {
  nome: faker.person.fullName(),
  email: faker.internet.email(),
  senha: faker.internet.password()
};

export const produto = {
  nome: faker.commerce.productName(),
  preco: faker.number.int({ min: 10, max: 500 }),
  descricao: faker.commerce.productDescription(),
  quantidade: faker.number.int({ min: 1, max: 100 }),
  imagem: 'images.png'
};


export function cadastrarUsuario({ nome, email, senha }, isAdmin = false) {
  cy.get('[data-testid="cadastrar"]').click();
  cy.get('[data-testid="nome"]').type(nome);
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="password"]').type(senha);
  if (isAdmin) cy.get('[data-testid="checkbox"]').click();
  cy.get('[data-testid="cadastrar"]').click();
}
export function cadastrarUsuarioComum({ nome, email, senha }) {
  cy.get('[data-testid="cadastrar"]').click();
  cy.get('[data-testid="nome"]').type(nome);
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="password"]').type(senha);
  cy.get('[data-testid="cadastrar"]').click();
}

export function loginUser() {
  return {
    email: usuarioComum.email,
    senha: usuarioComum.senha
  };
}
export function loginUserAdm() {
  return {
    email: usuarioAdm.email,
    senha: usuarioAdm.senha
  };
}
export function logout() {
  cy.get('[data-testid="logout"]').click();
}

export function cadastrarProduto({ nome, preco, descricao, quantidade, imagem }) {
  cy.get('[data-testid="cadastrar-produtos"]').click();
  cy.get('[data-testid="nome"]').type(nome);
  cy.get('[data-testid="preco"]').type(preco.toString());
  cy.get('[data-testid="descricao"]').type(descricao);
  cy.get('[data-testid="quantity"]').type(quantidade.toString());
  cy.get('[data-testid="imagem"]').attachFile(imagem);
  cy.get('[data-testid="cadastarProdutos"]').click();
};
