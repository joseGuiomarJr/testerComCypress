import { faker } from '@faker-js/faker';
import 'cypress-file-upload';

const nome = faker.person.fullName();
const email = faker.internet.email();
const senha = faker.internet.password();

const nomeUsuario = faker.person.fullName();
const emailUsuario = faker.internet.email();
const senhaUsuario = faker.internet.password();

const nomeUsuarioSecundario = faker.person.fullName();
const emailUsuarioSecundario = faker.internet.email();
const senhaUsuarioSecundario = faker.internet.password();

const nomeProduto = faker.commerce.productName();
    const preco = faker.number.int({ min: 10, max: 500 });
    const descricao = faker.commerce.productDescription();
    const quantidade = faker.number.int({ min: 1, max: 100 });

describe('TC - 002 FUNCIONALIDADE CADASTRAR USUARIO COMO ADM COM DADOS VALIDOS', () => {

  it('TC 002 ACESSANDO PAGE LOGIN', () => {
    cy.visit('/');
  });

  it(' CADASTRANDO USUARIO COMO ADM COM DADOS VALIDOS', () => {
  

    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="nome"]').type(nome);
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="password"]').type(senha);
    cy.get('[data-testid="checkbox"]').click();
    cy.get('[data-testid="cadastrar"]').click();
    cy.wait(2000);
    cy.get('.alert-link').contains("Cadastro realizado com sucesso");
  });

  it('TESTANDO A FUNCIONALIDADE CADASTRAR USUÁRIOS ADM DADOS VALIDOS', () => {
   

    cy.get('[data-testid="cadastrar-usuarios"]').click();
    cy.get('[data-testid="nome"]').type(nomeUsuario);
    cy.get('[data-testid="email"]').type(emailUsuario);
    cy.get('[data-testid="password"]').type(senhaUsuario);
    cy.get('[data-testid="checkbox"]').click();
    cy.get('[data-testid="cadastrarUsuario"]').click();
    cy.wait(2000);
  });
});
    